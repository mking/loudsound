import * as url from "url";

export const ALARM =
  "color: red; font-size: 36px; font-weight: 500; font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;";

export const SONGIFY_HOST = SONGIFY_HOST_ENV;
export const SONGIFY_CLIENT_ID = SONGIFY_CLIENT_ID_ENV;
export const SONGIFY_CLIENT_SECRET = SONGIFY_CLIENT_SECRET_ENV;
export const SONGIFY_AUTHORIZE_URL = url.format({
  pathname: "https://accounts.spotify.com/authorize",
  query: {
    client_id: SONGIFY_CLIENT_ID,
    response_type: "token",
    redirect_uri: url.format({
      pathname: `${SONGIFY_HOST}/callback`
    })
  }
});

export const SPOTIFY_ACCOUNTS_HOST = "https://accounts.spotify.com";
export const SPOTIFY_API_HOST = "https://api.spotify.com";
