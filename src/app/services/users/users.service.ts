import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  constructor() { }

  public SetUsers() {
      localStorage.setItem('admin', 'admin');

  }

}
