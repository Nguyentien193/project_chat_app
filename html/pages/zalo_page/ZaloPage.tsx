import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../style/zalopage.scss';
import {
  faAddressBook,
  faAngleLeft,
  faArrowLeft,
  faClock,
  faComment,
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
import { useEffect, useState } from 'react';
import ZaloSetting from './ZaloSetting';
import ZaloMessage from './ZaloMessage';
import { useLocation, useNavigate } from 'react-router-dom';
import { apiDetailSettingWeb } from 'pages/api/apiStore';
import { handleError } from 'utils/jwt';
const ZaloPage = () => {
  const [tabActive, setTabActive] = useState('1');

  const location = useLocation();
  const isViewMessage = location.pathname.split('/').includes('xemtinnhan');
  const isZalo = location.pathname.split('/').includes('zalo');
  const locationState = location.state;
  const navigate = useNavigate();

  useEffect(() => {
    setTabActive(isZalo || isViewMessage ? '0' : '1');
  }, [location]);

  return (
    <div className="zalo_container">
      <div className="zalo_header">
        <div className={`zalo_header--left ${isViewMessage ? 'zalo_header--center' : ''}`}>
          {isViewMessage ? (
            <>
              <FontAwesomeIcon icon={faArrowLeft} className="hover" onClick={() => navigate('/zalo')} />
              <p>{locationState?.name}</p>
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
      {tabActive === '1' ? <ZaloSetting /> : isViewMessage ? '' : <ZaloMessage />}
      <div className="zalo_footer">
        <ul className="list_menu">
          <li className={`menu_item ${tabActive === '0' ? 'active' : ''}`} onClick={() => setTabActive('0')}>
            <a href="/zalo">
              <FontAwesomeIcon icon={faComment} className="icon" />
              {tabActive === '0' && <span>Tin nhắn</span>}
            </a>
          </li>

          <li className="menu_item">
            <FontAwesomeIcon icon={faAddressBook} className="icon" />
          </li>

          <li className="menu_item">
            <FontAwesomeIcon icon={faThLarge} className="icon" />
          </li>

          <li className="menu_item">
            <FontAwesomeIcon icon={faClock} className="icon" />
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
