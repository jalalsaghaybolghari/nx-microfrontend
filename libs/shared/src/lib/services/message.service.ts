import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ToastMessage } from '../shared.model';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public toastMessageSubject = new BehaviorSubject<ToastMessage | null>(null);
  toastMessage$ = this.toastMessageSubject.asObservable();

  toastErrorMessage = (message: string, messageType: 'success' | 'error' | 'info') => {
    const toastMessage = new ToastMessage();
    toastMessage.message = message;
    toastMessage.messageType = messageType;
    this.toastMessageSubject.next(toastMessage);
  };
}