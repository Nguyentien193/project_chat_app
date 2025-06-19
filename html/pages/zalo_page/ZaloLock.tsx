import { faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { apiCheckLock } from 'pages/api/apiStore';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleError } from 'utils/jwt';

const ZaloLock = () => {
  const [code, setCode] = useState<string>('');
  const naviagte = useNavigate();
  const location = useLocation();
  const state = location.state;

  const isLock = localStorage.getItem('checkLock') === '1';

  useEffect(() => {
    if (isLock) {
      naviagte(`/xemtinnhan/${state.id}`, {
        state: {
          ...state,
        },
      });
    }
  }, []);

  const handleCheckLock = async () => {
    try {
      const res = await apiCheckLock(code);
      if (res) {
        console.log('ress');
        localStorage.setItem('checkLock', '1');
        naviagte(`/xemtinnhan/${state.id}`, {
          state: {
            ...state,
          },
        });
      }
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div className="page_lock_open">
      <p> Nhập mật mã để xem nội dung</p>
      <div className="box_pass">
        <input placeholder="Nhập mật mã để xem nội dung" value={code} onChange={(e) => setCode(e.target.value)} />
        <button type="button" onClick={() => handleCheckLock()}>
          <FontAwesomeIcon icon={faLockOpen} />
          Mở khóa
        </button>
      </div>
    </div>
  );
};

export default ZaloLock;
