import { Injectable } from '@angular/core';

import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private _isLoggedIn = false;
  private _isLoggedIn = true;
  private _currentUserId: number;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  set isLoggedIn(isLoggedIn: boolean) {
    this._isLoggedIn = isLoggedIn;
  }

  get currentUserId(): number {
    return this._currentUserId;
  }

  set currentUserId(currentUserId: number) {
    this._currentUserId = currentUserId;
  }

  login(name): void {
    this.currentUserId = this.userService.create(name);
    console.log(this.currentUserId);
    this.isLoggedIn = true;
    this.router.navigateByUrl('/');
  }
}
