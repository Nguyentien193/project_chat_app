import { faCloud, faLock, faQrcode, faShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { apiDetailSettingWeb } from 'pages/api/apiStore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError } from 'utils/jwt';

const img3 = require('assets/images/img3.jpg');
const imgZcloud = require('assets/images/zcloud.png');
const imgMaigcwand = require('assets/images/maigcwand.png');
const imgDatastorage = require('assets/images/datastorage.png');

const ZaloSetting = () => {
  const [userInfo, setUserInfo] = useState<any>();
  const isSetting = location.pathname.split('/').includes('taikhoan');
  const navigate = useNavigate();
  useEffect(() => {
    if (isSetting) {
      getDetail();
    }
  }, []);

  const getDetail = async () => {
    try {
      const res = await apiDetailSettingWeb();
      if (res) {
        const { image_url, main_account } = res.data;
        setUserInfo({
          image_url,
          main_account,
        });
      }
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div className="zalo_setting">
      <div className="setting_item">
        <img src={userInfo?.image_url} alt="avatar" className="avatar" />
        <div className="setting_item--text">
          <p>{userInfo?.main_account}</p>
          <span>Xem trang cá nhân</span>
        </div>
      </div>

      <div>
        <div className="setting_item setting_item--img pb-reset">
          <img src={imgZcloud} className="img_icon" alt="img_icon" />
          <div className="setting_item--text  divider">
            <p>zCloud</p>
            <span>Không gian lưu trữ dữ liệu trên đám mây</span>
          </div>
        </div>
        <div className="setting_item setting_item--img">
          <img src={imgMaigcwand} className="img_icon" alt="img_icon" />
          <div className="setting_item--text">
            <p>zStyle - Nổi bật trên Zalo</p>
            <span>Hình nề và nhạc cho cuộc gọi Zalo</span>
          </div>
        </div>
      </div>

      <div>
        <div className="setting_item pb-reset">
          <FontAwesomeIcon icon={faCloud} className="icon" />
          <div className="setting_item--text  divider">
            <p>Cloud của tôi</p>
            <span>Lưu trữ các tin nhắn quan trọng</span>
          </div>
        </div>
        <div className="setting_item setting_item--img pb-reset">
          <img src={imgDatastorage} className="img_icon" alt="img_icon" />
          <div className="setting_item--text divider">
            <p>Dữ liệu trên máy</p>
            <span>Quản lí dữ liệu Zalo của bạn</span>
          </div>
        </div>
        <div className="setting_item">
          <FontAwesomeIcon icon={faQrcode} className="icon" />
          <div className="setting_item--text">
            <p>Ví QR</p>
            <span>Lưu trữ và xuất trình các mã QR quan trọng</span>
          </div>
        </div>
      </div>
      <div>
        <div className="setting_item pb-reset" onClick={() => navigate('/baomat')}>
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
