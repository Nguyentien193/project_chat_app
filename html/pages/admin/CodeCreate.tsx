import { faBarcode, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { apiCreateCode, apiDetailCode, apiUpdateCode } from 'pages/api/apiStore';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { handleError } from 'utils/jwt';
interface Payload {
  code: string;
  note: string;
  status: string | number;
}
const CodeCreate = () => {
  const [status, setStatus] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id }: any = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm<Payload>({
    defaultValues: {
      code: '',
      note: '',
      status: 0,
    },
  });

  useEffect(() => {
    if (id) {
      getDetail();
    }
  }, [id]);

  const getDetail = async () => {
    try {
      const res = await apiDetailCode(id);
      if (res) {
        const { status, note, code } = res.data;
        setStatus(status);
        setValue('code', code);
        setValue('note', note);
      }
    } catch (error) {
      handleError(error);
    }
  };

  const handleUpdateCode = async (payload: any) => {
    if (isLoading) return;
    try {
      const res = await apiUpdateCode(id, payload);
      if (res) {
        navigate('/admin/dashboard');
      }
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateCode = async (payload: any) => {
    if (isLoading) return;
    try {
      const res = await apiCreateCode(payload);
      if (res) {
        navigate('/admin/dashboard');
      }
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const generateRandomCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    setValue('code', result);
  };

  const onSubmit = (data: any) => {
    setIsLoading(true);
    if (id) {
      handleUpdateCode(data);
    } else {
      handleCreateCode(data);
    }
  };
  return (
    <div className="page_admin">
      <div className="page_admin_title">
        <h2>Thêm mã phần mềm</h2>
      </div>
      <form className="form-create-code" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label className="form-label">Mã phần mềm</label>
          <div className="flex-center gap-20">
            <input {...register('code')} className="form-input" placeholder="Nhập mã phần mềm" />
            <button type="button" className="render_code" onClick={() => generateRandomCode()}>
              <FontAwesomeIcon icon={faBarcode} />
              Tạo mã
            </button>
          </div>
        </div>
        <div className="form-control">
          <label className="form-label">Ghi chú</label>
          <textarea {...register('note')} className="form-input" placeholder="Nhập ghi chú" rows={5} />
        </div>

        <div className="flex-center gap-10">
          <label className="custom-checkbox">
            <input
              checked={status === 1}
              type="checkbox"
              onChange={(e) => {
                setStatus(e.target.checked ? 1 : 0);
                setValue('status', e.target.checked ? 1 : 0);
              }}
            />
            <span className="checkmark"></span>
          </label>
          <label className="form-label">Kích hoạt</label>
        </div>
        <button disabled={isLoading} type="submit" className="btn_add">
          <FontAwesomeIcon icon={faSave} />
          {id ? 'Cập nhập' : 'Tạo mới'}
        </button>
      </form>
    </div>
  );
};

export default CodeCreate;
