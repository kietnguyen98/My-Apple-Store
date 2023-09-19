import { API_FETCHING_STATE } from "@/constants";
import { TApisFetchingState, TSnackBarProps, TUser } from "@/types";
import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { defaultUser } from "@/data/auth";

type TLoginProps = {
  userName: string;
  password: string;
};

@Injectable({ providedIn: "root" })
export class AuthService {
  authState: TApisFetchingState = API_FETCHING_STATE.IDLE;
  isAuth: boolean = false;
  user: TUser | undefined = undefined;

  authStateSubject = new BehaviorSubject<TApisFetchingState>(
    API_FETCHING_STATE.IDLE
  );
  isAuthSubject = new BehaviorSubject<boolean>(false);
  userSubject = new BehaviorSubject<TUser | undefined>(undefined);

  async getLogin({ userName, password }: TLoginProps) {
    console.log(userName, password);
    this.updateAuthState(API_FETCHING_STATE.LOADING);
    return await new Promise<void>(resolve => {
      setTimeout(() => {
        if (
          userName === defaultUser.userName &&
          password === defaultUser.password
        ) {
          this.updateAuthState(API_FETCHING_STATE.SUCCESS);
          this.updateIsAuth(true);
          this.updateUser(defaultUser);
          resolve();
        } else {
          this.updateAuthState(API_FETCHING_STATE.ERROR);
        }
      }, 1000);
    });
  }

  updateAuthState(newState: TApisFetchingState) {
    this.authState = newState;
    this.authStateSubject.next(newState);
  }

  updateIsAuth(newValue: boolean) {
    this.isAuth = newValue;
    this.isAuthSubject.next(newValue);
  }

  updateUser(newValue: TUser) {
    this.user = newValue;
    this.userSubject.next(newValue);
  }

  getAuthState(): Observable<TApisFetchingState> {
    return this.authStateSubject.asObservable();
  }

  getIsAuth(): Observable<boolean> {
    return this.isAuthSubject.asObservable();
  }

  getUser(): Observable<TUser | undefined> {
    return this.userSubject.asObservable();
  }
}
