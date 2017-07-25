import { Component } from '@angular/core';
import { Platform, LoadingController, Loading } from 'ionic-angular';
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

  private loader: Loading;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private auth: AuthProvider,
    private loadingCtrl: LoadingController,
  ) {
    this.startLoading();
    this.initPlatformReady();
    this.initAuthUser();
  }

  private startLoading(): void {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.loader.present();
  }
  private stopLoading(): void {
    if (this.loader) {
      this.loader.dismiss();
      this.loader = null;
    }
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
      .filter(user => user !== undefined)
      .subscribe(user => this.initRootPage(user))
  }

  private initRootPage(user: User): void {
    this.stopLoading();
    if (user) {
      this.rootPage = TabsPage;
    } else {
      this.rootPage = WelcomePage;
    }
  }
}
