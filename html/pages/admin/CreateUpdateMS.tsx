import { faClose, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UploadImage from 'components/UploadImage';
import { apiCreateMessages, apiDetailMessages, apiUpdateMessages } from 'pages/api/apiStore';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { handleError } from 'utils/jwt';
import ListConversation from './ListConversation';

const CreateUpdateMS = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imgDetail, setImgDetail] = useState<string>('');
  const [isHidden, setIsHidden] = useState(0);

  const { register, handleSubmit, setValue } = useForm<any>({
    defaultValues: {
      status: 0,
      is_hidden: 0,
    },
  });

  const { id }: any = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getDetail();
    }
  }, [id]);

  const getDetail = async () => {
    try {
      const res = await apiDetailMessages(id);
      if (res) {
        const { status, account, content, custom_time, image_url, is_hidden } = res.data;
        setValue('status', status);
        setValue('account', account || '');
        setValue('content', content || '');
        setValue('is_hidden', is_hidden);

        setValue('custom_time', custom_time ? custom_time : '');
        setImgDetail(image_url);
        setIsHidden(Number(is_hidden));
      }
    } catch (error) {
      handleError(error);
    }
  };

  const handleUploadImg = (file: any) => {
    setValue('file', file);
  };
  const onSubmit = (data: any) => {
    setIsLoading(true);
    if (id) {
      handleUpdateMessage(data);
    } else {
      handleCreateMessage(data);
    }
  };

  const handleUpdateMessage = async (payload: any) => {
    if (isLoading) return;
    try {
      const res = await apiUpdateMessages(id, payload);
      if (res) {
        navigate('/admin/msms');
      }
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateMessage = async (payload: any) => {
    if (isLoading) return;
    try {
      const res = await apiCreateMessages(payload);
      if (res) {
        navigate('/admin/msms');
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
        <h2>Quản lí tin nhắn</h2>
      </div>
      <form className="form-create-code form-create-ms" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="form-label">Hình ảnh</label>
          <UploadImage onChange={handleUploadImg} imgUrl={id ? imgDetail : null} />
        </div>

        <div className="form-control">
          <label className="form-label">Tài khoản tin nhắn</label>
          <input className="form-input" placeholder="Tài khoản" {...register('account')} />
        </div>
        <div className="form-control">
          <label className="form-label">Nội dung</label>
          <textarea className="form-input" placeholder="Nội dung tin nhắn" rows={5} {...register('content')} />
        </div>
        <div className="form-control">
          <label className="form-label">Thời gian</label>
          <input className="form-input" placeholder="Tài khoản" {...register('custom_time')} />
        </div>
        <div className="form-control">
          <label className="form-label">Trạng thái</label>
          <div className="select-custom">
            <select {...register('status')}>
              <option value={0}>Ẩn</option>
              <option value={1}>Hiện</option>
            </select>
            <svg className="icon-dropdown" viewBox="0 0 10 6">
              <polyline points="1 1 5 5 9 1"></polyline>
            </svg>
          </div>
        </div>
        <div className="flex-center gap-10">
          <label className="custom-checkbox">
            <input
              checked={isHidden === 1}
              type="checkbox"
              onChange={(e) => {
                setIsHidden(e.target.checked ? 1 : 0);
                setValue('is_hidden', e.target.checked ? 1 : 0);
              }}
            />
            <span className="checkmark"></span>
          </label>
          <label className="form-label">Vô hiệu hóa tin nhắn</label>
        </div>
        {id && <ListConversation />}

        <div className="flex-center gap-10">
          <button type="submit" className="btn_add">
            <FontAwesomeIcon icon={faSave} />
            Lưu lại
          </button>
          <Link className="btn_add btn_close" to={'/admin/msms'}>
            <FontAwesomeIcon icon={faClose} />
            Hủy bỏ
          </Link>
        </div>
      </form>
    </div>
  );
};

export default CreateUpdateMS;
