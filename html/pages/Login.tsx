import { useState } from 'react';
import './style/homepage.scss';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import ProgressBar from 'components/ProcessBar';
import { useForm } from 'react-hook-form';
const img1 = require('assets/images/img1.jpg');
const img2 = require('assets/images/img2.jpg');
const img3 = require('assets/images/img3.jpg');
const img4 = require('assets/images/img4.jpg');
const img5 = require('assets/images/img5.jpg');
const img6 = require('assets/images/img6.jpg');

interface Payload {
  phone: string;
  password: string;
}

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phone, setPhone] = useState<string>('');

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<Payload>({
    defaultValues: {
      phone: '',
      password: '',
    },
  });

  const handleChangePhone = (phone: string) => {
    setValue('phone', phone);
  };
  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setIsSubmitting(false);
  };
  return (
    <div className="home_page login_page">
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
          {isSubmitting ? (
            <>
              <ProgressBar isSubmitting={isSubmitting} />
              <div className="box_message">Hệ thống đang xử lí vui lòng chờ trong ít phút !</div>
            </>
          ) : (
            <form className="form_login" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
              <label className="form-label mb-16">Số Điện Thoại:</label>
              <PhoneInput country={'vn'} value={phone} onChange={(phone) => handleChangePhone(phone)} />
              {phone === '' && <p className="error_message">{'Nhập số điện thoại'}</p>}
              <label className="form-label my-16">Mã phần mềm - nhận tại Hotline/Zalo: admin</label>
              <input
                {...register('password', { required: 'Không được để trống !' })}
                className="form_input mb-16"
                placeholder="Nhập mã phần mềm"
              />
              {errors.password && <p className="error_message">{errors.password.message}</p>}
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
