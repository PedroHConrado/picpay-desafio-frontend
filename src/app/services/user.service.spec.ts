import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { environment } from 'src/environments/environment';

import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../models/user';


import { HttpClient } from '@angular/common/http';

describe('UserService', () => {

  let users: User[];
  let service: UserService;
  let snackBar: MatSnackBar;
  let http: HttpClient

  beforeEach(() => {
    service: new UserService(snackBar, http);
  });

  it('Retorna a lista de usuários', () => {
    service.readUsers()
    expect(users).toBeTruthy();
  });
});
