import { apiDetailSettingWeb, getListConversation } from 'pages/api/apiStore';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { handleError } from 'utils/jwt';

const ZaloConversation = () => {
  const [conversation, setConversation] = useState<any[]>([]);
  const location = useLocation();
  const state = location.state;
  const { id } = useParams();

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
      const res = await getListConversation(id);
      if (res) {
        setConversation(res.data);
      }
    } catch (error) {
      handleError(error);
    }
  };
  return (
    <div className="chat-container">
      {conversation?.map((item, idx: number) => (
        <React.Fragment key={idx}>
          {item.sender_id === 10 ? (
            <>
              <div className="chat-row left">
                <img src={state?.image_url} alt="avatar" />
                <div className="message">{item.content}</div>
              </div>
              {item.custom_time && <span className="show_time_ms">{item.custom_time}</span>}
            </>
          ) : (
            <>
              <div className="chat-row right">
                <div className="message">{item.content}</div>
              </div>
              {item.custom_time && <span className="show_time_ms">{item.custom_time}</span>}
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ZaloConversation;
