import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { AccountsPage } from '../accounts/accounts';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  Home = HomePage;
  About = AboutPage;
  Accounts = AccountsPage;

  constructor() {

  }
}
