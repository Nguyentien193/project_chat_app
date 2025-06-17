import { useContext, useEffect } from 'react';
import { AppContext } from '../contextProvider/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEllipsis, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import './styles/header.scss';
import { handleError, isLogin } from 'utils/jwt';

const Header = () => {
  const {
    showNavbar,
    setShowNavbar,
    userProfile,
    optionsDomain,
    setOptionsDomain,
    domains,
    setDomains,
    setUserProfile,
  } = useContext(AppContext);
  const checkLogin = isLogin();

  return (
    <>
      <div className="header">
        <div className="header_left">
          <p className="title_header">QUẢN TRỊ NỘI DUNG</p>
          <button className="header_btn-bar " onClick={() => setShowNavbar(!showNavbar)}>
            <span className="header_btn-bar-img">
              <FontAwesomeIcon icon={faBars} />
            </span>
          </button>
        </div>

        <div className="header_right">
          <button type="button" className="btn_logout">
            <span className="header_btn-bar-img">
              <FontAwesomeIcon icon={faRightFromBracket} />
            </span>
            Đăng xuất
          </button>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
};

export default Header;
