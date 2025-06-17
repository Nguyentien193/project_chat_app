import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UploadImage from 'components/UploadImage';
const AdminSetting = () => {
  return (
    <div className="page_admin">
      <div className="page_admin_title">
        <h2>Cấu hình website</h2>
      </div>
      <form className="form-create-code">
        <div className="form-control">
          <label className="form-label">Tiêu đề website:</label>
          <input className="form-input" placeholder="Nhập tiêu đề website" />
        </div>
        <div className="form-control">
          <label className="form-label">Số điện thoại:</label>
          <input className="form-input" placeholder="Nhập số điện thoại" />
        </div>
        <div className="form-control">
          <label className="form-label">Ảnh đại diện:</label>
          <UploadImage />
        </div>
        <div className="form-control">
          <label className="form-label">Tài khoản chính:</label>
          <input className="form-input" placeholder="Nhập tài khoản" />
        </div>
        <div className="form-control">
          <label className="form-label">Mã truy cập tin nhắn:</label>
          <input className="form-input" placeholder="Nhập mã truy cập tin nhắn" />
        </div>
        <div className="form-control">
          <label className="form-label">Description:</label>
          <textarea className="form-input" placeholder="Nhập description" rows={5} />
        </div>
        <div className="form-control">
          <label className="form-label">Keywords:</label>
          <textarea className="form-input" rows={5} />
        </div>
        <button type="submit" className="btn_add">
          <FontAwesomeIcon icon={faSave} />
          Lưu lại
        </button>
      </form>
    </div>
  );
};

export default AdminSetting;
