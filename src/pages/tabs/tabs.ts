import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { SettingPage } from '../setting/setting';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  Home = HomePage;
  About = AboutPage;
  Setting = SettingPage;

  constructor() {

  }
}
