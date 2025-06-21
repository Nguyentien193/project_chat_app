import { faCircleXmark, faPlus, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { apiDetailSettingWeb, apiSaveConversation, getListConversation } from 'pages/api/apiStore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
      if (res && res.data) {
        setConversation(res.data.content || []);
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

  const handleDeleteConversation = (idx: number) => {
    const arrCopy = [...conversation];
    arrCopy.splice(idx, 1);
    const payload = {
      management_message_id: id,
      content: arrCopy,
    };

    handleSaveConversation(payload, 'delete');
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

  const handleClickSaveConversation = () => {
    const payload = {
      management_message_id: id,
      content: conversation,
    };

    handleSaveConversation(payload, 'save');
  };

  const handleSaveConversation = async (payload: any, type: string) => {
    try {
      const res = await apiSaveConversation(payload);
      if (res) {
        toast.success(type === 'save' ? 'Lưu thành công !' : 'Xóa thành công!', {
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
              <button className="btn-save" type="button" onClick={() => handleClickSaveConversation()}>
                <FontAwesomeIcon icon={faSave} />
              </button>
              <button className="btn-delete" type="button" onClick={() => handleDeleteConversation(idx)}>
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
