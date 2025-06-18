import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style/homepage.scss';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const img1 = require('assets/images/img1.jpg');
const img2 = require('assets/images/img2.jpg');
const img3 = require('assets/images/img3.jpg');
const img4 = require('assets/images/img4.jpg');
const img5 = require('assets/images/img5.jpg');
const img6 = require('assets/images/img6.jpg');
const img7 = require('assets/images/img7.jpg');
const img8 = require('assets/images/img8.jpg');
const img9 = require('assets/images/img9.jpg');
const img10 = require('assets/images/img10.jpg');
const img11 = require('assets/images/img11.jpg');
const img12 = require('assets/images/img12.jpg');

const HomePage = () => {
  return (
    <div className="home_page">
      <div className="container">
        <div className="container_title">
          <h2>Vui Lòng Lựa Chọn Dịch Vụ bạn Mong Muốn</h2>
          <FontAwesomeIcon icon={faArrowDown} className="icon_down" />
        </div>
        <div className="card_list">
          <div className="card_item">
            <a href="dangnhap">
              <img src={img1} alt="Khối hình ảnh mạng xã hội" className="w-100" />
            </a>
          </div>
          <div className="card_item">
            <a href="dangnhap">
              <img src={img2} className="w-100" />
            </a>
          </div>
          <div className="card_item">
            <a href="dangnhap">
              <img src={img3} className="w-100" />
            </a>
          </div>
          <div className="card_item">
            <a href="dangnhap">
              <img src={img4} className="w-100" />
            </a>
          </div>
          <div className="card_item">
            <a href="dangnhap">
              <img src={img5} className="w-100" />
            </a>
          </div>
          <div className="card_item">
            <a href="dangnhap">
              <img src={img6} className="w-100" />
            </a>
          </div>
          <div className="card_item">
            <a href="dangnhap">
              <img src={img7} className="w-100" />
            </a>
          </div>
          <div className="card_item">
            <a href="dangnhap">
              <img src={img8} className="w-100" />
            </a>
          </div>
          <div className="card_item">
            <a href="dangnhap">
              <img src={img9} className="w-100" />
            </a>
          </div>
          <div className="card_item">
            <a href="dangnhap">
              <img src={img10} className="w-100" />
            </a>
          </div>
          <div className="card_item">
            <a href="dangnhap">
              <img src={img11} className="w-100" />
            </a>
          </div>
          <div className="card_item">
            <a href="dangnhap">
              <img src={img12} className="w-100" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
