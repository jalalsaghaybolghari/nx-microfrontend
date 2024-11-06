import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlUtility } from '@libs/shared';
import { LoginResult } from '@libs/auth';
import { LoginInput, RegisterInput } from '../identity.model';

@Injectable({ providedIn: 'root' })
export class IdentityApiService {
  constructor(private http: HttpClient) {}

  login(loginInput: LoginInput) {
    return this.http.post<LoginResult>(
      `${UrlUtility.serverUrl}/login`,
      loginInput
    );
  }
  register(registerInput: RegisterInput) {
    return this.http.post<null>(
      `${UrlUtility.serverUrl}/register`,
      registerInput
    );
  }
  logout() {
    return this.http.post<unknown>(`${UrlUtility.serverUrl}/logout`, null);
  }
}
