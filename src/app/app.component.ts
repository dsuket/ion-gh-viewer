import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

import {TabsPage} from '../pages/tabs/tabs';
import {WelcomePage} from '../pages/welcome/welcome';
import {User} from '../models/user';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private auth: AuthProvider,
  ) {
    this.initPlatformReady();
    this.initAuthUser();
  }

  private initPlatformReady(): Promise<any> {
    return this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  private initAuthUser(): void {
    this.auth.user$
      .subscribe(user => this.initRootPage(user))
  }

  private initRootPage(user: User): void {
    if (user) {
      this.rootPage = TabsPage;
    } else {
      this.rootPage = WelcomePage;
    }
  }
}
