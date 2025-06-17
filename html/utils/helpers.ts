
export const getCookie = (cname: string | undefined) => {
  if (!cname) {
    return;
  }
  const name = cname + '';
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length + 1, c.length);
    }
  }
  return '';
};

/**
 * Set cookie
 **/
export const saveCookie = (cookieData: { name: string; value: string; exdays: number }): void => {
  if (!cookieData?.name) {
    return;
  }
  const date = new Date();
  date.setTime(date.getTime() + cookieData.exdays * 24 * 60 * 60 * 1000);
  document.cookie = `${cookieData.name}=${cookieData.value}; expires=${date.toUTCString()}`;
};

/**
 * Del Cookie by name
 **/
export const delCookie = (name: string) => {
  if (!name) {
    return;
  }
  document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};

/**
 * Check Empty data
 **/
export const isEmpty = (value: any): boolean => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  );
};
export const formatNumber = (value: string | number) => {
  const phoneNumber = value + '';
  const list = phoneNumber.split('.');
  const prefix = list[0].charAt(0) === '-' ? '-' : '';
  let num = prefix ? list[0].slice(1) : list[0];
  let result = '';
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
};

export const validationPhone = (value: string, callback: any) => {
  if (/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(value)) {
    return callback();
  }
  return callback('Số điện thoại chưa đúng định dạng');
};

export const validationNumber = (value: any, callback?: any) => {
  if (/^\d+$/.test(value)) {
    return callback();
  }
  return callback('Số chưa đúng định dạng');
};

export const stringToSlug = (str: string): string => {
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str
    .normalize('NFD') // chuyển chuỗi sang unicode tổ hợp
    .replace(/[\u0300-\u036f]/g, ''); // xóa các ký tự dấu sau khi tách tổ hợp

  // Thay ký tự đĐ
  str = str.replace(/[đĐ]/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // Xóa ký tự - liên tiếp
  str = str.replace(/-+/g, '-');

  // xóa phần dư - ở đầu & cuối
  str = str.replace(/^-+|-+$/g, '');

  // return
  return str;
};

// export const getUrlImage = (url = '') => {
//   return url && url !== '' ? APP_CONFIG.apiUrl + url : null;
// };

export const getExpirationDate = (jwtToken: string) => {
  if (!jwtToken) {
    return null;
  }

  const jwt = JSON.parse(atob(jwtToken.split('.')[1]));

  // multiply by 1000 to convert seconds into milliseconds
  return (jwt && jwt.exp && jwt.exp * 1000) || null;
};

export const formatPrice = (value: number, round = 2) => {
  return value.toFixed(round).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

export const formatPriceVND = (value: number) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);

export const formatPriced = (value: number) => `${new Intl.NumberFormat('de-DE').format(value)}`;

export const checkImageFile = (data: File[]): boolean => {
  for (const key in data) {
    const file = data[key];
    if (file.type !== 'image/png' && file.type !== 'image/gif' && file.type !== 'image/jpeg') {
      return false;
    }
  }
  return true;
};

export const getBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export const base64toBlob = (dataurl: string, filename: string) => {
  let arr: any = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
};

export const deleteEmptyPropertiesObj = (obj: any, keyExist?: string) => {
  Object.keys(obj).forEach((k) => {
    if (keyExist) {
      if (!obj[k] && k !== keyExist) delete obj[k];
    } else if (!obj[k]) delete obj[k];
  });
};

export const stringToArray = (str: string, separator: string): string[] => {
  if (!str) return [];
  return str.split(separator).map((item) => item.trim());
};

export const filteredPropertiesObj = (raw: any, allowed: string[]) => {
  return Object.keys(raw)
    .filter((key) => allowed.includes(key))
    .reduce((obj, key) => {
      return {
        ...obj,
        [key]: raw[key],
      };
    }, {});
};

export const flattenArr = (a: any[]): any => {
  return Array.isArray(a) ? [].concat(...a.map(flattenArr)) : a;
};

export const dataURLToBlob = (dataURL: any) => {
  const BASE64_MARKER = ';base64,';
  if (dataURL.indexOf(BASE64_MARKER) == -1) {
    const parts = dataURL.split(',');
    const contentType = parts[0].split(':')[1];
    const raw = parts[1];

    return new Blob([raw], { type: contentType });
  }

  const parts = dataURL.split(BASE64_MARKER);
  const contentType = parts[0].split(':')[1];
  const raw = window.atob(parts[1]);
  const rawLength = raw.length;

  const uInt8Array = new Uint8Array(rawLength);

  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], { type: contentType });
};



