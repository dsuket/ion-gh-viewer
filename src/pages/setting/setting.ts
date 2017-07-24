import { Component } from '@angular/core';
import {AuthProvider} from '../../providers/auth/auth';

interface Item {
  label: string;
  icon?: string;
  action: Function;
}

/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  accountMenu: Item[] = [
    {
      label: 'logout',
      action: this.logout.bind(this)
    }
  ];

  items = {
    account: this.accountMenu
  };

  constructor(
    private auth: AuthProvider,
  ) {
  }

  logout(): void {
    this.auth.logout().subscribe();
  }

}
