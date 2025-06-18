import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppContext } from '../../contextProvider/AppContext';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { handleError } from 'utils/jwt';
import { apiChangePassword } from 'pages/api/apiStore';
import { toast } from 'react-toastify';

interface FormValues {
  password_current: string;
  password_new: string;
  password_confirm: string;
}

const ChangePassword = () => {
  const { userProfile } = useContext(AppContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    try {
      const res: any = await apiChangePassword(userProfile.id, {
        name: userProfile.name,
        email: userProfile.email,
        password: data.password_confirm,
      });

      if (res) {
        console.log('res: ', res);
        toast.success(res.message, {
          className: 'custom_toast',
        });
      }
    } catch (error) {
      handleError(error);
    }
  };

  const passwordNew = watch('password_new'); // dùng để so sánh với confirm

  return (
    <div className="page_admin">
      <div className="page_admin_title">
        <h2>Thay đổi mật khẩu đăng nhập</h2>
      </div>
      <form className="form-create-code" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="form-label">Mật khẩu hiện tại:</label>
          <input
            type="password"
            className="form-input"
            placeholder="Nhập mật khẩu hiện tại"
            {...register('password_current', { required: 'Vui lòng nhập mật khẩu hiện tại' })}
          />
          {errors.password_current && <p className="error_message">{errors.password_current.message}</p>}
        </div>

        <div className="form-control">
          <label className="form-label">Mật khẩu mới:</label>
          <input
            type="password"
            className="form-input"
            placeholder="Nhập mật khẩu mới"
            {...register('password_new', {
              required: 'Vui lòng nhập mật khẩu mới',
              minLength: {
                value: 6,
                message: 'Mật khẩu phải có ít nhất 6 ký tự',
              },
            })}
          />
          {errors.password_new && <p className="error_message">{errors.password_new.message}</p>}
        </div>

        <div className="form-control">
          <label className="form-label">Xác nhận mật khẩu mới:</label>
          <input
            type="password"
            className="form-input"
            placeholder="Xác nhận mật khẩu mới"
            {...register('password_confirm', {
              required: 'Vui lòng xác nhận mật khẩu',
              validate: (value) => value === passwordNew || 'Mật khẩu xác nhận không khớp',
            })}
          />
          {errors.password_confirm && <p className="error_message">{errors.password_confirm.message}</p>}
        </div>

        <button type="submit" className="btn_add">
          <FontAwesomeIcon icon={faSave} />
          Đổi mật khẩu
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
