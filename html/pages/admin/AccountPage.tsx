import moment from 'moment';
import { apiDeleteAccount, apiListAccount } from 'pages/api/apiStore';
import { useEffect, useState } from 'react';
import { handleError } from 'utils/jwt';

const AccountPage = () => {
  const [account, setAccount] = useState<any[]>([]);
  useEffect(() => {
    getListAll();
  }, []);

  const getListAll = async () => {
    try {
      const res = await apiListAccount();
      if (res) {
        setAccount(res.data);
      }
    } catch (error) {
      handleError(error);
    }
  };

  const handleDeleteAccount = async (id: any) => {
    try {
      handleDeleteData(id);
      await apiDeleteAccount(id);
    } catch (error) {
      handleError(error);
    }
  };

  const handleDeleteData = (id: number) => {
    const arrCopy = [...account];
    const index = arrCopy.findIndex((item) => item.id === id);
    arrCopy.splice(index, 1);
    setAccount(arrCopy);
  };
  return (
    <div className="page_admin">
      <div className="page_admin_title">
        <h2>Danh sách tài khoản đã đăng kí</h2>
      </div>
      <div className="table_scroll">
        <table className="responsive-table table_account">
          <thead>
            <tr>
              <th>STT</th>
              <th>Code</th>
              <th>Ngày đăng kí</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {account?.map((item: any, idx: number) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{item.code}</td>
                <td>{moment(item.created_at).format('DD/MM/YYYY')}</td>
                <td>
                  <button type="button" className="delete" onClick={() => handleDeleteAccount(item.id)}>
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

export default AccountPage;
