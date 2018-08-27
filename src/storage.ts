export function setToken(token: string) {
  localStorage.setItem("token", token);
}

export function removeToken() {
  localStorage.removeItem("token");
}

export function getToken(): string {
  return localStorage.getItem("token") == null
    ? null
    : localStorage.getItem("token");
}
