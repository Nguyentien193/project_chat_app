import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ChangePassword = () => {
  return (
    <div className="page_admin">
      <div className="page_admin_title">
        <h2>Thay đổi mật khẩu đăng nhập</h2>
      </div>
      <form className="form-create-code">
        <div className="form-control">
          <label className="form-label">Mật khẩu hiện tại:</label>
          <input className="form-input" placeholder="Nhập mật khẩu hiện tại:" />
        </div>
        <div className="form-control">
          <label className="form-label">Mật khẩu mới:</label>
          <input className="form-input" placeholder="Nhập mật khẩu mới:" />
        </div>
        <div className="form-control">
          <label className="form-label">Xác nhận mật khẩu mới:</label>
          <input className="form-input" placeholder="Xác nhận mật khẩu mới" />
        </div>
        <button type="submit" className="btn_add">
          <FontAwesomeIcon icon={faSave} />
          Đổi mật khẩu
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
