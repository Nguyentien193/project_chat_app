import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { apiDelteCode, apiListCode } from 'pages/api/apiStore';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { handleError } from 'utils/jwt';
const SoftwareCodePage = () => {
  const [codes, setCode] = useState<any[]>([]);
  const naviagte = useNavigate();

  useEffect(() => {
    getListAll();
  }, []);

  const getListAll = async () => {
    try {
      const res = await apiListCode();
      if (res) {
        setCode(res.data);
      }
    } catch (error) {
      handleError(error);
    }
  };

  const handleDeleteCode = async (id: any) => {
    try {
      handleDeleteData(id);
      await apiDelteCode(id);
    } catch (error) {
      handleError(error);
    }
  };

  const handleDeleteData = (id: number) => {
    const arrCopy = [...codes];
    const index = arrCopy.findIndex((item) => item.id === id);
    arrCopy.splice(index, 1);
    setCode(arrCopy);
  };

  return (
    <div className="page_admin">
      <div className="page_admin_title">
        <h2>Quản lý mã phần mềm</h2>
        <Link type="button" className="btn_add" to="/admin/code/add">
          <FontAwesomeIcon icon={faPlus} />
          Tạo mới
        </Link>
      </div>
      <div className="table_scroll">
        <table className="responsive-table table_code">
          <thead>
            <tr>
              <th>STT</th>
              <th>Code</th>
              <th>Ghi chú</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {codes?.map((item: any, idx: number) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item.code}</td>
                <td>{item.note}</td>
                <td>{item.status === 1 ? <span className="status">Hiển thị</span> : ''}</td>
                <td>
                  <button type="button" className="edit" onClick={() => naviagte(`/admin/code/add/${item.id}`)}>
                    Sửa
                  </button>
                  <button type="button" className="delete" onClick={() => handleDeleteCode(item.id)}>
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SoftwareCodePage;
