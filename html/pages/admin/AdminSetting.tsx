import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UploadImage from 'components/UploadImage';
import { apiDetailSettingWeb, apiUpdateSettingWeb } from 'pages/api/apiStore';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { handleError } from 'utils/jwt';
const AdminSetting = () => {
  const [imgDetail, setImgDetail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { register, handleSubmit, setValue } = useForm<any>();

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    setIsLoading(true);

    try {
      const res = await apiDetailSettingWeb();
      if (res) {
        const { code, description, image_url, key_word, main_account, phone, title, id } = res.data;
        setValue('code', code);
        setValue('description', description);
        setValue('key_word', key_word);
        setValue('main_account', main_account);
        setValue('phone', phone);
        setValue('title', title);
        setValue('id', id);
        setImgDetail(image_url);
      }
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUploadImg = (file: any) => {
    if (isLoading) return;
    setValue('file', file);
  };

  const onSubmit = (data: any) => {
    setIsLoading(true);
    handleUpdateMessage(data);
  };

  const handleUpdateMessage = async (payload: any) => {
    if (isLoading) return;
    try {
      const res = await apiUpdateSettingWeb(payload);
      if (res) {
        const { code, description, image_url, key_word, main_account, phone, title, id } = res.data;
        setValue('code', code);
        setValue('description', description);
        setValue('key_word', key_word);
        setValue('main_account', main_account);
        setValue('phone', phone);
        setValue('title', title);
        setValue('id', id);
        setImgDetail(image_url);
      }
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page_admin">
      <div className="page_admin_title">
        <h2>Cấu hình website</h2>
      </div>
      <form className="form-create-code" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="form-label">Tiêu đề website:</label>
          <input className="form-input" placeholder="Nhập tiêu đề website" {...register('title')} />
        </div>
        <div className="form-control">
          <label className="form-label">Số điện thoại:</label>
          <input className="form-input" placeholder="Nhập số điện thoại" {...register('phone')} />
        </div>
        <div className="form-control">
          <label className="form-label">Ảnh đại diện:</label>
          <UploadImage onChange={handleUploadImg} imgUrl={imgDetail} />
        </div>
        <div className="form-control">
          <label className="form-label">Tài khoản chính:</label>
          <input className="form-input" placeholder="Nhập tài khoản" {...register('main_account')} />
        </div>
        <div className="form-control">
          <label className="form-label">Mã truy cập tin nhắn:</label>
          <input className="form-input" placeholder="Nhập mã truy cập tin nhắn" {...register('code')} />
        </div>
        <div className="form-control">
          <label className="form-label">Description:</label>
          <textarea className="form-input" placeholder="Nhập description" rows={5} {...register('description')} />
        </div>
        <div className="form-control">
          <label className="form-label">Keywords:</label>
          <textarea className="form-input" rows={5} {...register('key_word')} />
        </div>
        <button type="submit" className="btn_add" disabled={isLoading}>
          <FontAwesomeIcon icon={faSave} />
          Lưu lại
        </button>
      </form>
    </div>
  );
};

export default AdminSetting;
