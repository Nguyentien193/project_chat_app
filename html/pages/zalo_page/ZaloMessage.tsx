import { apiListMessages } from 'pages/api/apiStore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError } from 'utils/jwt';

const img3 = require('assets/images/img3.jpg');

const ZaloMessage = () => {
  const naviagte = useNavigate();
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const timeout = setInterval(() => {
      getListAll();
    }, 1000);
    return () => {
      clearInterval(timeout);
    };
  }, []);

  const getListAll = async () => {
    try {
      const res = await apiListMessages();
      if (res) {
        const newArr = res.data.filter((item: any) => item.is_hidden !== 1);
        setMessages(newArr);
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
              naviagte(`/mokhoa/${item.id}`, {
                state: {
                  ...item,
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
