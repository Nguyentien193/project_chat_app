import { apiListMessages } from 'pages/api/apiStore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError } from 'utils/jwt';

const img3 = require('assets/images/img3.jpg');

const ZaloMessage = () => {
  const naviagte = useNavigate();
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    getListAll();
  }, []);

  const getListAll = async () => {
    try {
      const res = await apiListMessages();
      if (res) {
        setMessages(res.data);
      }
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div className="zalo_setting zalo_message">
      {messages?.map((item: any, idx: number) => (
        <div className="setting_item message_item" key={idx}>
          <img src={item.image_url} alt="avatar" className="avatar" />
          <div
            className="setting_item--text divider hover"
            onClick={() =>
              naviagte(`/xemtinnhan/${item.id}`, {
                state: {
                  name: item.account,
                },
              })
            }
          >
            <div className="message_status">
              <p>{item.account}</p>
              {item.status === 0 && <span>Bảo mật</span>}
            </div>
            <span>{item.status === 0 ? 'Tin nhắn đang bị ẩn' : item.content}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ZaloMessage;
