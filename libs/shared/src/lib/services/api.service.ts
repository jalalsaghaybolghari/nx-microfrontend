import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlUtility } from '../utils';
import { User, UserInput } from '../shared.model';

@Injectable({ providedIn: 'root' })
export class SharedApiService {
  constructor(private http: HttpClient) {}

  getUsers(userInput: UserInput) {
    const url = UrlUtility.getQueryStringParams(`${UrlUtility.serverUrl}/users`, userInput);
    return this.http.get<User[]>(url);
  }
}
