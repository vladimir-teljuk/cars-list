import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  public Compare(email: string, password: string) {
      const userPassword = localStorage.getItem(email);
      if (userPassword === password) {
        return true;
      }
      return false;
  }

}
