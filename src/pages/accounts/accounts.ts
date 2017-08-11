import { Component } from '@angular/core';
import {AuthProvider} from '../../providers/auth/auth';

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
