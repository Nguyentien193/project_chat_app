import { faBars, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { destroyLogged } from 'utils/jwt';
import { AppContext } from '../contextProvider/AppContext';
import './styles/header.scss';

const Header = () => {
  const { showNavbar, setShowNavbar } = useContext(AppContext);

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
          <button
            type="button"
            className="btn_logout"
            onClick={() => {
              destroyLogged();
              window.location.reload();
            }}
          >
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
