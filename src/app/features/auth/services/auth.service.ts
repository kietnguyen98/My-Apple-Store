import { API_FETCHING_STATE } from "@/app/share/constants";
import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { mockUsersData } from "@/app/features/auth/data/users.data";
import { localStorageHelper } from "@/utilities";
import { TApisFetchingState } from "@/app/share/types";
import { TUser } from "../types";

export type TLoginProps = {
  username: string;
  password: string;
};

@Injectable({ providedIn: "root" })
export class AuthService {
  loginState: TApisFetchingState = API_FETCHING_STATE.IDLE;
  logoutState: TApisFetchingState = API_FETCHING_STATE.IDLE;
  isAuth: boolean = false;
  user: TUser | undefined = undefined;

  loginStateSubject = new BehaviorSubject<TApisFetchingState>(
    API_FETCHING_STATE.IDLE
  );
  logoutStateSubject = new BehaviorSubject<TApisFetchingState>(
    API_FETCHING_STATE.IDLE
  );
  isAuthSubject = new BehaviorSubject<boolean>(false);
  userSubject = new BehaviorSubject<TUser | undefined>(undefined);

  constructor() {
    const isAuth = localStorageHelper.getIsAuth() === "true";
    const userAccount = localStorageHelper.getUserAccount() as string;

    if (isAuth) {
      this.updateIsAuth(isAuth);
      const userAccountObject = JSON.parse(userAccount);
      const user = mockUsersData.find(
        user =>
          user.username === userAccountObject.username &&
          user.password === userAccountObject.password
      );

      if (user) this.updateUser(user);
    }
  }

  async getLogin({ username, password }: TLoginProps) {
    this.updateLoginState(API_FETCHING_STATE.LOADING);
    return await new Promise<void>(resolve => {
      setTimeout(() => {
        const user = mockUsersData.find(
          user => user.username === username && user.password === password
        );
        if (user) {
          this.updateLoginState(API_FETCHING_STATE.SUCCESS);
          this.updateIsAuth(true);
          this.updateUser(user);
          resolve();
        } else {
          this.updateLoginState(API_FETCHING_STATE.ERROR);
        }
      }, 1000);
    });
  }

  async getLogout() {
    this.updateIsAuth(false);
    this.updateUser(undefined);
    localStorageHelper.clearUser();
  }

  updateLoginState(newState: TApisFetchingState) {
    this.loginState = newState;
    this.loginStateSubject.next(newState);
  }

  updateLogoutState(newState: TApisFetchingState) {
    this.loginState = newState;
    this.logoutStateSubject.next(newState);
  }

  updateIsAuth(newValue: boolean) {
    this.isAuth = newValue;
    this.isAuthSubject.next(newValue);
    localStorageHelper.setIsAuth(newValue);
  }

  updateUser(newValue: TUser | undefined) {
    this.user = newValue;
    this.userSubject.next(newValue);
    if (newValue) {
      localStorageHelper.setUserAccount(newValue?.username, newValue?.password);
    }
  }

  getLoginState(): Observable<TApisFetchingState> {
    return this.loginStateSubject.asObservable();
  }

  getLogoutState(): Observable<TApisFetchingState> {
    return this.logoutStateSubject.asObservable();
  }

  getIsAuth(): Observable<boolean> {
    return this.isAuthSubject.asObservable();
  }

  getUser(): Observable<TUser | undefined> {
    return this.userSubject.asObservable();
  }
}
