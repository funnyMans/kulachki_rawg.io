const api = {
  KULACHKI_API: process.env.KULACHKI_API,
  API_KEY: process.env.API_KEY,
  RAWG_API: process.env.RAWG_API,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
};
const apiPathName = {
  planets: `${api.KULACHKI_API}/planets`,
  tags: `${api.RAWG_API}/tags?`,
  games: `${api.RAWG_API}/games?`,
  genres: `${api.RAWG_API}/genres?`,
  stores: `${api.RAWG_API}/stores?`,
  creators: `${api.RAWG_API}/creators?`,
  platforms: `${api.RAWG_API}/platforms?`,
  developers: `${api.RAWG_API}/developers?`,
  publishers: `${api.RAWG_API}/publishers?`,
};

export const config = {
  api,
  apiPathName,
};
