import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../contextProvider/AppContext';
import './styles/navbar.scss';
import { destroyLogged } from 'utils/jwt';

const Navbar = () => {
  const { showNavbar, setShowNavbar } = useContext(AppContext);
  const location = useLocation();
  const pathNameSplit = location.pathname.split('/');

  return (
    <>
      <nav className="navbar">
        <p className="navbar_title">QUẢN TRỊ NỘI DUNG</p>
        <ul className="nav">
          <li className="nav-item">
            <Link
              className={`nav-link  ${
                pathNameSplit.includes('dashboard') || pathNameSplit.includes('code') ? 'active' : ''
              }`}
              to="/admin/dashboard"
            >
              <span data-feather="home"></span>
              Mã phần mềm
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link  ${pathNameSplit.includes('member') ? 'active' : ''}`} to="/admin/member">
              <span data-feather="file"></span>
              Danh sách tài khoản
            </Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link  ${pathNameSplit.includes('msms') ? 'active' : ''}`} to="/admin/msms">
              <span data-feather="file"></span>
              Danh sách tin nhắn
            </Link>
          </li>
        </ul>
        <h6 className="sidebar-heading ">
          <span>Thông tin cá nhân</span>
        </h6>
        <ul className="nav">
          <li className="nav-item">
            <Link className={`nav-link  ${pathNameSplit.includes('setting') ? 'active' : ''}`} to="/admin/setting">
              <span data-feather="file-text"></span>
              Cấu hình website
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link  ${pathNameSplit.includes('change-password') ? 'active' : ''}`}
              to="/admin/change-password"
            >
              <span data-feather="file-text"></span>
              Đổi mật khẩu
            </Link>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                destroyLogged();
                window.location.reload();
              }}
            >
              <span data-feather="file-text"></span>
              Đăng xuất
            </a>
          </li>
        </ul>
      </nav>
      <div className={`sidebar ${showNavbar ? 'active' : ''}`}>
        <button className="sidebar_btn-bar" onClick={() => setShowNavbar(!showNavbar)}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <ul className="nav">
          <li className="nav-item">
            <Link
              className={`nav-link  ${
                pathNameSplit.includes('dashboard') || pathNameSplit.includes('code') ? 'active' : ''
              }`}
              to="/admin/dashboard"
              onClick={() => setShowNavbar(!showNavbar)}
            >
              <span data-feather="home"></span>
              Mã phần mềm
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={() => setShowNavbar(!showNavbar)}
              className={`nav-link  ${pathNameSplit.includes('member') ? 'active' : ''}`}
              to="/admin/member"
            >
              <span data-feather="file"></span>
              Danh sách tài khoản
            </Link>
          </li>
          <li className="nav-item">
            <Link
              onClick={() => setShowNavbar(!showNavbar)}
              className={`nav-link  ${pathNameSplit.includes('msms') ? 'active' : ''}`}
              to="/admin/msms"
            >
              <span data-feather="file"></span>
              Danh sách tin nhắn
            </Link>
          </li>
        </ul>
        <h6 className="sidebar-heading ">
          <span>Thông tin cá nhân</span>
        </h6>
        <ul className="nav">
          <li className="nav-item">
            <Link
              onClick={() => setShowNavbar(!showNavbar)}
              className={`nav-link  ${pathNameSplit.includes('setting') ? 'active' : ''}`}
              to="/admin/setting"
            >
              <span data-feather="file-text"></span>
              Cấu hình website
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link  ${pathNameSplit.includes('change-password') ? 'active' : ''}`}
              to="/admin/change-password"
              onClick={() => setShowNavbar(!showNavbar)}
            >
              <span data-feather="file-text"></span>
              Đổi mật khẩu
            </Link>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                destroyLogged();
                window.location.reload();
              }}
            >
              <span data-feather="file-text"></span>
              Đăng xuất
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
