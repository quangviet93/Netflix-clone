const localStorageUtils = {
  saveToken({ accessToken, refreshToken }) {
    localStorage.setItem("TOKEN", accessToken);
    localStorage.setItem("REFRESH_TOKEN", refreshToken);
  },
  removeToken() {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("REFRESH_TOKEN");
  },
  getAccessToken() {
    return localStorage.getItem("TOKEN");
  },
  getRefreshToken() {
    return localStorage.getItem("REFRESH_TOKEN");
  }
}

export default localStorageUtils;