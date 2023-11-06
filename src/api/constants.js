const BASE_URL = 'https://www.reddit.com';
const URL = 'https://oauth.reddit.com';
const URL_AUTH = `${BASE_URL}/api/v1/authorize?`;
const CLIENT_ID = '6PWXmr_-vBLTZdJBvsb20w';
const RESPONSE_TYPE = 'token';
const RANDOM_STRING = 'random_string';
const REDIRECT_URI = 'https://blogget-ten.vercel.app/auth';
const SCOPE_STRING = 'identity read submit';
const TOKEN_TYPE_HINT = 'access_token';

export {
  BASE_URL,
  URL,
  URL_AUTH,
  CLIENT_ID,
  RESPONSE_TYPE,
  RANDOM_STRING,
  REDIRECT_URI,
  SCOPE_STRING,
  TOKEN_TYPE_HINT,
};
