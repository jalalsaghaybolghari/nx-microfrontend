import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginResult } from '../auth.model';

@Injectable({ providedIn: 'root' })
export class AuthCommonService {
  private loginResultSubject: BehaviorSubject<LoginResult | null> = new BehaviorSubject<LoginResult | null>(null);
  public loginResult$: Observable<LoginResult | null> = this.loginResultSubject.asObservable();

  constructor() {
    const loginResult = this.getLoginResult();
    if (loginResult) this.setLoginResult(loginResult);
  }

  getLoginResult(): LoginResult | null {
    const value = localStorage.getItem('loginResult');
    return value ? JSON.parse(value) : null;
  }
  setLoginResult(value: LoginResult) {
    this.loginResultSubject.next(value);
    localStorage.setItem('loginResult', JSON.stringify(value));
  }
  removeLoginResult() {
    this.loginResultSubject.next(null);
    localStorage.removeItem('loginResult');
  }
}
