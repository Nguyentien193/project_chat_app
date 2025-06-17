import { apiListAccount } from 'pages/api/apiStore';
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
        console.log('res: ', res);
        setAccount(res.data);
      }
    } catch (error) {
      handleError(error);
    }
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
            <tr>
              <td>1</td>
              <td>777b</td>
              <td>15/06/2025</td>
              <td>
                <button type="button" className="delete">
                  Xóa
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountPage;
