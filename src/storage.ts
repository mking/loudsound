export function setStorageToken(token: string) {
  localStorage.setItem("token", token);
}

export function getStorageToken(): string {
  return localStorage.getItem("token") == null
    ? null
    : localStorage.getItem("token");
}
