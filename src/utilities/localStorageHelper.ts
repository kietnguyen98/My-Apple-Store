const appPrefix = "MAS";

export function setIsAuth(value: boolean) {
  localStorage.setItem(`${appPrefix}_isAuth`, value.toString());
}

export function getIsAuth() {
  return localStorage.getItem(`${appPrefix}_isAuth`);
}

export function setUserAccount(username: string, password: string) {
  localStorage.setItem(
    `${appPrefix}_account`,
    JSON.stringify({
      username: username,
      password: password,
    })
  );
}

export function getUserAccount() {
  return localStorage.getItem(`${appPrefix}_account`);
}

export function clearUser() {
  localStorage.setItem(`${appPrefix}_isAuth`, "");
  localStorage.setItem(`${appPrefix}_account`, "");
}
