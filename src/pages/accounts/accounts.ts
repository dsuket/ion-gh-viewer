import { Component } from '@angular/core';
import {AuthProvider} from '../../providers/auth/auth';

interface Item {
  label: string;
  icon?: string;
  action: Function;
}

@Component({
  selector: 'page-accounts',
  templateUrl: 'accounts.html',
})
export class AccountsPage {

  constructor(
    public auth: AuthProvider,
  ) {
  }

  logout(): void {
    this.auth.logout().subscribe();
  }

}
