import { UserData } from '../pages/Home';
const API_END_POINT = 'https://deliverble.online/event';

export const request = async (url: string, options = {}) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`, {
      ...options,
      headers: {
        'Content-type': 'application/json',
      },
    });

    if (res.status === 201) {
      return await res.json();
    }
    throw new Error('API 처리 오류');
  } catch (e) {
    console.error(e);
  }
};

export const createUserData = async (userData: UserData) => {
  const { data } = await request(`/user`, {
    method: 'POST',
    body: JSON.stringify({
      ...userData,
    }),
  });
  return data;
};
