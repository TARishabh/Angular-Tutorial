import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: string[] = ['John', 'Jane', 'Jack'];

  constructor() { }
}
