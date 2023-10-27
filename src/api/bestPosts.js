import { URL } from './constants';

const params = {
  limit: 10,
};

const searchParams = new URLSearchParams(params);
const urlBestPosts = `${URL}/best?${searchParams.toString()}`;

export default urlBestPosts;
