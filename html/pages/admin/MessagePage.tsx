import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { apiDelteMessages, apiListMessages } from 'pages/api/apiStore';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { handleError } from 'utils/jwt';

const MessagePage = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const naviagte = useNavigate();

  useEffect(() => {
    getListAll();
  }, []);

  const getListAll = async () => {
    try {
      const res = await apiListMessages();
      if (res) {
        setMessages(res.data);
      }
    } catch (error) {
      handleError(error);
    }
  };

  const handleDeleteMessages = async (id: any) => {
    try {
      handleDeleteData(id);
      await apiDelteMessages(id);
    } catch (error) {
      handleError(error);
    }
  };

  const handleDeleteData = (id: number) => {
    const arrCopy = [...messages];
    const index = arrCopy.findIndex((item) => item.id === id);
    arrCopy.splice(index, 1);
    setMessages(arrCopy);
  };
  return (
    <div className="page_admin">
      <div className="page_admin_title">
        <h2>Quản lý tin nhắn</h2>
        <Link type="button" className="btn_add" to="/admin/msms/create">
          <FontAwesomeIcon icon={faPlus} />
          Tạo mới
        </Link>
      </div>
      <div className="table_scroll">
        <table className="responsive-table table_message">
          <thead>
            <tr>
              <th>STT</th>
              <th>Ảnh</th>
              <th>Tài khoản</th>
              <th>Nội dung</th>
              <th>Thời gian</th>
              <th>Trạng thái</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {messages?.map((item: any, idx: number) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>
                  <img src={item.image_url} alt="avatar" />
                </td>
                <td>{item.account}</td>
                <td>{item.content}</td>
                <td>{item.custom_time ? item.custom_time : ''}</td>
                <td>
                  {item.status === 1 ? <span className="status">Hiển thị</span> : ''}{' '}
                  {item.is_hidden === 1 ? <span className="hidden">OFF</span> : ''}
                </td>
                <td>
                  <button type="button" className="edit " onClick={() => naviagte(`/admin/msms/edit/${item.id}`)}>
                    Sửa
                  </button>
                  <button type="button" className="delete" onClick={() => handleDeleteMessages(item.id)}>
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

export default MessagePage;
