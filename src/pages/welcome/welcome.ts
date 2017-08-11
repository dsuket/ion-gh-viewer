import {Component} from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(
    public auth: AuthProvider,
  ) {
  }

  login() {
    this.auth.loginWithGithub()
      .subscribe(
        user => console.log('login success', user),
        err => console.error('login error', err));
  }

}
