import { toast } from 'react-toastify';
import { APP_CONFIG } from './env';
import { delCookie, getCookie, saveCookie } from './helpers';

export const getAccessToken = () => {
  return getCookie(APP_CONFIG.tokenKey) || null;
};

export const getAuth = () => {
  const cookie = getCookie(APP_CONFIG.profileKey);
  try {
    return cookie ? JSON.parse(cookie) : null;
  } catch (error) {
    return null;
  }
};

export const parseCookie = (name: string) => {
  const cookie = getCookie(name);
  try {
    return cookie ? JSON.parse(cookie) : null;
  } catch (error) {
    return null;
  }
}

export const saveAuth = (auth: any, exdays = 1) => {
  saveCookie({ name: APP_CONFIG.profileKey, value: JSON.stringify(auth), exdays });
};

export const saveToken = (accessToken: string, exdays = 1) => {
  saveCookie({ name: APP_CONFIG.tokenKey, value: accessToken, exdays });
};
export const destroyLogged = () => {
  delCookie(APP_CONFIG.tokenKey);
  delCookie(APP_CONFIG.profileKey);
  localStorage.clear();
};

/**
 * Check Auth login App
 **/
export const isLogin = () => {
  const token = getCookie(APP_CONFIG.tokenKey);
  return !!token;
};

/**
 * encrypted
 **/



/*
 * Handle call api error
 */

export const handleError = (err: any) => {
  if (err?.data?.message) {
    toast.error(err.data.message, {
      className: 'custom-toast',
    });
  }

  if (err.status) {
    switch (err.status) {
      case 401:
        destroyLogged();
        window.location.href = '/login';
        break;
      default:
        break;
    }
  }
};

export const calculateChartHeight = (dataLength: number, baseHeight = 150, perDataHeight = 20) => {
  return baseHeight + dataLength * perDataHeight;
};

