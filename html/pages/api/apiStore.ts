import axiosRequest from 'utils/axiosConfig';

export const apiLogin = async (payload: any) => {
  const res = await axiosRequest.post('/clients/login', payload);
  return res;
};

export const apiLoginAdmin = async (payload: any) => {
  const res = await axiosRequest.post('/users/login', payload);
  return res;
};

export const apiListAccount = async () => {
  const res = await axiosRequest.get('/clients');
  return res;
};

export const apiDeleteAccount = async (id: any) => {
  const res = await axiosRequest.delete(`/clients/${id}`);
  return res;
};

export const apiListCode = async () => {
  const res = await axiosRequest.get('/codes');
  return res;
};

export const apiCreateCode = async (payload: any) => {
  const res = await axiosRequest.post('/codes', payload);
  return res;
};

export const apiUpdateCode = async (id: any, payload: any) => {
  const res = await axiosRequest.put(`/codes/${id}`, payload);
  return res;
};

export const apiDelteCode = async (id: any) => {
  const res = await axiosRequest.delete(`/codes/${id}`);
  return res;
};

export const apiDetailCode = async (id: any) => {
  const res = await axiosRequest.get(`/codes/${id}`);
  return res;
};

export const apiListMessages = async () => {
  const res = await axiosRequest.get('/management-messages');
  return res;
};

export const apiCreateMessages = async (payload: any) => {
  const res = await axiosRequest.postFormData('/management-messages', payload);
  return res;
};

export const apiUpdateMessages = async (id: any, payload: any) => {
  const res = await axiosRequest.postFormData(`/management-messages/${id}`, payload);
  return res;
};

export const apiDelteMessages = async (id: any) => {
  const res = await axiosRequest.delete(`/management-messages/${id}`);
  return res;
};

export const apiDetailMessages = async (id: any) => {
  const res = await axiosRequest.get(`/management-messages/${id}`);
  return res;
};

export const apiDetailSettingWeb = async () => {
  const res = await axiosRequest.get(`/setting_contacts`);
  return res;
};

export const apiUpdateSettingWeb = async (payload: any) => {
  const res = await axiosRequest.postFormData('/setting_contacts', payload);
  return res;
};

export const apiChangePassword = async (id: any, payload: any) => {
  const res = await axiosRequest.put(`/users/${id}`, payload);
  return res;
};


export const getListConversation =async (id: any) => {
  const res = await axiosRequest.get(`/messages/list-by-client/${id}`);
  return res;
}

export const apiCreateConversation =async (payload: any) => {
  const res = await axiosRequest.post(`/messages`, payload);
  return res;
}

export const apiUpdateConversation =async (id: any,payload: any) => {
  const res = await axiosRequest.put(`messages/${id}`, payload);
  return res;
}

export const apiDeleteConversation =async (id: any) => {
  const res = await axiosRequest.delete(`messages/${id}`);
  return res;
}

export const apiCheckLock =async (code: string) => {
  const res = await axiosRequest.get(`setting_contacts/check-code/${code}`);
  return res;
}