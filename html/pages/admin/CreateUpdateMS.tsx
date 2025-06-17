import { faClose, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UploadImage from 'components/UploadImage';
import { Link } from 'react-router-dom';

const CreateUpdateMS = () => {
  return (
    <div className="page_admin">
      <div className="page_admin_title">
        <h2>Quản lí tin nhắn</h2>
      </div>
      <form className="form-create-code form-create-ms">
        <div className="form-control">
          <label className="form-label">Hình ảnh</label>
          <UploadImage />
        </div>

        <div className="form-control">
          <label className="form-label">Tài khoản tin nhắn</label>
          <input className="form-input" placeholder="Tài khoản" />
        </div>
        <div className="form-control">
          <label className="form-label">Nội dung</label>
          <textarea className="form-input" placeholder="Nội dung tin nhắn" rows={5} />
        </div>
        <div className="form-control">
          <label className="form-label">Thời gian</label>
          <input className="form-input" placeholder="Tài khoản" />
        </div>
        <div className="form-control">
          <label className="form-label">Trạng thái</label>
          <div className="select-custom">
            <select onChange={(e) => console.log(e.target.value)} value={0}>
              <option value={0}>Ẩn</option>
              <option value={1}>Hiện</option>
            </select>
            <svg className="icon-dropdown" viewBox="0 0 10 6">
              <polyline points="1 1 5 5 9 1"></polyline>
            </svg>
          </div>
        </div>

        <div className="flex-center gap-10">
          <button type="submit" className="btn_add">
            <FontAwesomeIcon icon={faSave} />
            Lưu lại
          </button>
          <Link className="btn_add btn_close" to={'/admin/msms'}>
            <FontAwesomeIcon icon={faClose} />
            Hủy bỏ
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreateUpdateMS;
