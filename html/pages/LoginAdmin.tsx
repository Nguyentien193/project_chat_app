import './style/homepage.scss';
import './style/admin.scss';
import { useForm } from 'react-hook-form';
import { apiLoginAdmin } from './api/apiStore';
import { handleError, saveAuth, saveToken } from 'utils/jwt';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../contextProvider/AppContext';

interface Payload {
  email: string;
  password: string;
}
const LoginAdmin = () => {
  const { userProfile, setUserProfile } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Payload>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const naviagte = useNavigate();
  const onSubmit = async (data: any) => {
    setIsLoading(true);
    if (isLoading) return;
    try {
      const res: any = await apiLoginAdmin(data);
      if (res) {
        const token = res.bearer_token;
        if (token) {
          saveToken(token, 7);
          saveAuth(res.user, 7);
          setUserProfile(res.user);
          naviagte('/admin/dashboard');
        }
      }
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="home_page login_page login_admin">
      <div className="container">
        <div className="box_form form-create-ms">
          <h3>ĐĂNG NHẬP HỆ THỐNG ADMIN</h3>
          <form className="form_login" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="form-label">Địa chỉ email</label>
              <input
                type="text"
                autoComplete="off"
                {...register('email', { required: 'Email không được để trống' })}
                className="form-input"
                placeholder="Nhập địa chỉ email"
              />
              {errors.email && <p className="error_message">{errors.email.message}</p>}
            </div>
            <div className="form-control mb-16">
              <label className="form-label">Mật khẩu</label>
              <input
                type="password"
                autoComplete="off"
                {...register('password', { required: 'Password không được để trống' })}
                className="form-input"
              />
              {errors.password && <p className="error_message">{errors.password.message}</p>}
            </div>

            <button disabled={isLoading} type="submit" className="btn_submit">
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
