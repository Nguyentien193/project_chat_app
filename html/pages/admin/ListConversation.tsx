import { faCircleXmark, faPlus, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  apiCreateConversation,
  apiDeleteConversation,
  apiDetailSettingWeb,
  apiUpdateConversation,
  getListConversation,
} from 'pages/api/apiStore';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { handleError } from 'utils/jwt';

const ListConversation = () => {
  const [conversation, setConversation] = useState<any[]>([]);
  const [adminInfo, setAdminInfo] = useState<any>();
  const { id } = useParams();

  useEffect(() => {
    getListAll();
    getAdminInfo();
  }, []);

  const getAdminInfo = async () => {
    try {
      const res = await apiDetailSettingWeb();
      if (res) {
        setAdminInfo(res.data);
      }
    } catch (error) {
      handleError(error);
    }
  };

  const getListAll = async () => {
    try {
      const res = await getListConversation(id);
      if (res) {
        setConversation(res.data);
      }
    } catch (error) {
      handleError(error);
    }
  };

  const handleAddConvesation = () => {
    setConversation((prev) => [
      ...prev,
      {
        content: '',
        custom_time: '',
        sender_id: 0,
        type: 0,
        receiver_id: Number(id),
      },
    ]);
  };

  const handleDeleteConversation = (idx: number, id?: any) => {
    if (id) {
      handleDeleteConversationApi(id);
    }
    const arrCopy = [...conversation];
    arrCopy.splice(idx, 1);
    setConversation(arrCopy);
  };

  const handleChangeData = (idx: number, key: string, value: string | number) => {
    setConversation((prev) => {
      const arrCopy = [...prev];
      arrCopy[idx] = { ...arrCopy[idx], [key]: value };

      if (key === 'sender_id') {
        if (value === 0) {
          arrCopy[idx] = { ...arrCopy[idx], receiver_id: Number(id) };
          arrCopy[idx] = { ...arrCopy[idx], sender_id: 0 };
        } else {
          arrCopy[idx] = { ...arrCopy[idx], sender_id: Number(id) };
          arrCopy[idx] = { ...arrCopy[idx], receiver_id: 0 };
        }
      }
      return arrCopy;
    });
  };

  const handleClickSaveConversation = (item: any, idx: number) => {
    const payload = {
      sender_id: item.sender_id,
      receiver_id: item.receiver_id,
      content: item.content,
      custom_time: item.custom_time,
    };

    if (item.id) {
      handleUpdateConversation(item.id, payload, idx);
    } else {
      handleCreateConversation(payload, idx);
    }
  };

  const handleDeleteConversationApi = async (id: any) => {
    try {
      const res: any = await apiDeleteConversation(id);
      if (res) {
        toast.success(res.message, {
          className: 'custom_toast',
        });
      }
    } catch (error) {
      handleError(error);
    }
  };

  const handleCreateConversation = async (payload: any, idx: any) => {
    try {
      const res = await apiCreateConversation(payload);
      if (res) {
        const dataNew = res.data;
        setConversation((prev) => {
          const arrCopy = [...prev];
          arrCopy[idx] = {
            ...dataNew,
          };
          return arrCopy;
        });
        toast.success('Tạo thành công.', {
          className: 'custom_toast',
        });
      }
    } catch (error) {
      handleError(error);
    }
  };

  const handleUpdateConversation = async (id: any, payload: any, idx: any) => {
    try {
      const res = await apiUpdateConversation(id, payload);
      if (res) {
        const dataNew = res.data;
        setConversation((prev) => {
          const arrCopy = [...prev];
          arrCopy[idx] = {
            ...dataNew,
          };
          return arrCopy;
        });
        toast.success('Cập nhập thành công.', {
          className: 'custom_toast',
        });
      }
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div className="conversation-container">
      <div className="conversation-header">
        <h2>DANH SÁCH HỘI THOẠI</h2>
        <button type="button" className="btn-add" onClick={() => handleAddConvesation()}>
          <FontAwesomeIcon icon={faPlus} /> Thêm hội thoại
        </button>
      </div>
      {conversation.length > 0 ? (
        conversation.map((item: any, idx: number) => (
          <div className="conversation-row" key={idx}>
            <div className="form-control">
              <label className="form-label">Trạng thái</label>
              <div className="select-custom">
                <select
                  value={item.sender_id}
                  onChange={(e) => handleChangeData(idx, 'sender_id', Number(e.target.value))}
                >
                  <option value={0}>{`Tài khoản chính:${adminInfo?.main_account || ''}`}</option>
                  <option value={Number(id)}>Tài khoản nhắn tin</option>
                </select>
                <svg className="icon-dropdown" viewBox="0 0 10 6">
                  <polyline points="1 1 5 5 9 1"></polyline>
                </svg>
              </div>
            </div>

            <textarea
              value={item.content}
              className="message-input"
              placeholder="Nội dung tin nhắn"
              onChange={(e) => handleChangeData(idx, 'content', e.target.value)}
            ></textarea>
            <input
              type="text"
              value={item.custom_time}
              className="time-input"
              placeholder="Thời gian"
              onChange={(e) => handleChangeData(idx, 'custom_time', e.target.value)}
            />
            <div className="buttons">
              <button className="btn-save" type="button" onClick={() => handleClickSaveConversation(item, idx)}>
                <FontAwesomeIcon icon={faSave} />
              </button>
              <button className="btn-delete" type="button" onClick={() => handleDeleteConversation(idx, item.id)}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="no_conversation">Chưa có hội thoại nào !</p>
      )}
    </div>
  );
};

export default ListConversation;
