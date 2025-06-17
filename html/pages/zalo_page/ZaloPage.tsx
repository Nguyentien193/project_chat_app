import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../style/zalopage.scss';
import {
  faAddressBook,
  faClock,
  faComment,
  faGear,
  faPlus,
  faQrcode,
  faSearch,
  faThLarge,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import ZaloSetting from './ZaloSetting';
import ZaloMessage from './ZaloMessage';
const ZaloPage = () => {
  const [tabActive, setTabActive] = useState('1');

  return (
    <div className="zalo_container">
      <div className="zalo_header">
        <div className="zalo_header--left">
          <FontAwesomeIcon icon={faSearch} />
          <span>Tìm kiếm</span>
        </div>
        <div className="zalo_header--right">
          {tabActive === '1' ? (
            <FontAwesomeIcon icon={faGear} />
          ) : (
            <>
              <FontAwesomeIcon icon={faQrcode} />
              <FontAwesomeIcon icon={faPlus} />
            </>
          )}
        </div>
      </div>
      {tabActive === '1' ? <ZaloSetting /> : <ZaloMessage />}
      <div className="zalo_footer">
        <ul className="list_menu">
          <li className={`menu_item ${tabActive === '0' ? 'active' : ''}`} onClick={() => setTabActive('0')}>
            <div>
              <FontAwesomeIcon icon={faComment} className="icon" />
              {tabActive === '0' && <span>Tin nhắn</span>}
            </div>
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
            <a href="#">
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
