const API_URL = 'http://103.9.185.91:8993';

export const Get_UID_API = async (userData) => {
  const rawResponse = await fetch(
    `${API_URL}/api/get_uid/?msisdn=01886855988`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );
  const content = await rawResponse.json();
  return content;
};

export const Get_Categories_Api = async () => {
  const response = await fetch(`${API_URL}/api/categories`);
  const latest = await response.json();
  return latest;
};
