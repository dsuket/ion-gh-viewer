import {Component} from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import {TabsPage} from '../tabs/tabs';

/**
 * Generated class for the WelcomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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
      .subscribe(null, err => console.error('login error', err));
  }

}
