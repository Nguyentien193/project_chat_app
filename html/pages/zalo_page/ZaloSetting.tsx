import { faCloud, faLock, faQrcode, faShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const img3 = require('assets/images/img3.jpg');

const ZaloSetting = () => {
  return (
    <div className="zalo_setting">
      <div className="setting_item">
        <img src={img3} alt="avatar" className="avatar" />
        <div className="setting_item--text">
          <p>Thien Linh</p>
          <span>Xem trang cá nhân</span>
        </div>
      </div>
      <div className="setting_item">
        <FontAwesomeIcon icon={faQrcode} className="icon" />
        <div className="setting_item--text">
          <p>Ví QR</p>
          <span>Lưu trữ và xuất trình các mã QR quan trọng</span>
        </div>
      </div>
      <div className="setting_item">
        <FontAwesomeIcon icon={faCloud} className="icon" />
        <div className="setting_item--text">
          <p>Cloud của tôi</p>
          <span>Lưu trữ các tin nhắn quan trọng</span>
        </div>
      </div>
      <div>
        <div className="setting_item pb-reset">
          <FontAwesomeIcon icon={faShield} className="icon" />
          <div className="setting_item--text divider">
            <p>Tài khoản và bảo mật</p>
          </div>
        </div>
        <div className="setting_item ">
          <FontAwesomeIcon icon={faLock} className="icon" />
          <div className="setting_item--text">
            <p>Quyền riêng tư</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZaloSetting;
