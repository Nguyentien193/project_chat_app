import {
  faAddressBook,
  faArrowLeft,
  faClock,
  faCommentDots,
  faGear,
  faList,
  faPhone,
  faPlus,
  faQrcode,
  faSearch,
  faThLarge,
  faUser,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../style/zalopage.scss';
import ZaloMessage from './ZaloMessage';
import ZaloSetting from './ZaloSetting';
import ZaloSecurity from './ZaloSecurity';
import ZaloLock from './ZaloLock';
import ZaloConversation from './ZaloConversation';

const img_application = require('assets/images/img_application.png');

const ZaloPage = () => {
  const [tabActive, setTabActive] = useState('1');
  const location = useLocation();
  const isViewMessage = location.pathname.split('/').includes('xemtinnhan');
  const isZalo = location.pathname.split('/').includes('zalo');
  const isSecurity = location.pathname.split('/').includes('baomat');
  const isLock = location.pathname.split('/').includes('mokhoa');

  const locationState = location.state;

  const navigate = useNavigate();

  useEffect(() => {
    setTabActive(isZalo || isViewMessage || isLock ? '0' : '1');
  }, [location]);

  return (
    <div className="zalo_container">
      <div className="zalo_header">
        <div className={`zalo_header--left ${isViewMessage ? 'zalo_header--center' : ''}`}>
          {isViewMessage || isSecurity ? (
            <>
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="hover"
                onClick={() => (isSecurity ? navigate('/taikhoan') : navigate('/zalo'))}
              />
              <p>{isSecurity ? ' Tài khoản và bảo mật' : locationState?.account}</p>
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faSearch} />
              <span>Tìm kiếm</span>
            </>
          )}
        </div>
        <div className="zalo_header--right">
          {tabActive === '1' ? (
            <FontAwesomeIcon icon={faGear} />
          ) : isViewMessage ? (
            <>
              <FontAwesomeIcon icon={faPhone} />
              <FontAwesomeIcon icon={faVideo} />
              <FontAwesomeIcon icon={faList} />
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faQrcode} />
              <FontAwesomeIcon icon={faPlus} />
            </>
          )}
        </div>
      </div>
      {tabActive === '1' ? (
        isSecurity ? (
          <ZaloSecurity />
        ) : (
          <ZaloSetting />
        )
      ) : isViewMessage ? (
        <ZaloConversation />
      ) : isLock ? (
        <ZaloLock />
      ) : (
        <ZaloMessage />
      )}
      <div className="zalo_footer">
        <ul className="list_menu">
          <li className={`menu_item ${tabActive === '0' ? 'active' : ''}`} onClick={() => setTabActive('0')}>
            <a href="/zalo">
              <FontAwesomeIcon icon={faCommentDots} className="icon" />
              {tabActive === '0' && <span>Tin nhắn</span>}
            </a>
          </li>

          <li className="menu_item">
            <FontAwesomeIcon icon={faAddressBook} className="icon fz-20" />
          </li>

          <li className="menu_item">
            <img src={img_application} alt="img_application" />
          </li>

          <li className="menu_item">
            <FontAwesomeIcon icon={faClock} className="icon fz-20" />
          </li>

          <li className={`menu_item ${tabActive === '1' ? 'active' : ''}`} onClick={() => setTabActive('1')}>
            <a href="/taikhoan">
              <FontAwesomeIcon icon={faUser} className="icon" />
              {tabActive === '1' && <span>Tài khoản</span>}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ZaloPage;
