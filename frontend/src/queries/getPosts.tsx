import { IGetData, Posts } from '../types/types';

const getPosts: IGetData<Posts>['GET'] = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
    mode: 'cors' as RequestMode,
    credentials: 'include' as RequestCredentials,
  };

  try {
    const url = `${process.env.NEXT_PUBLIC_API_HOST_V1}/blog_posts/`;
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Error fetching the data:', err);
    return null;
  }
};

export default getPosts;
