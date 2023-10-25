import {
  URL_AUTH,
  CLIENT_ID,
  RESPONSE_TYPE,
  RANDOM_STRING,
  REDIRECT_URI,
  SCOPE_STRING,
} from './constants';

const params = {
  client_id: CLIENT_ID,
  response_type: RESPONSE_TYPE,
  state: RANDOM_STRING,
  redirect_uri: REDIRECT_URI,
  scope: SCOPE_STRING,
};

const searchParams = new URLSearchParams(params);
const urlAuth = `${URL_AUTH}${searchParams.toString()}`;

export default urlAuth;
