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

  rootPage:any = TabsPage;

  private loader: Loading;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private auth: AuthProvider,
    private loadingCtrl: LoadingController,
  ) {
    this.showLoading();
    this.initPlatformReady();
    this.initAuthUser();
  }

  private showLoading(): void {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    this.loader.present();
  }

  private hideLoading(): void {
    if (this.loader) {
      this.loader.dismiss();
      this.loader = null;
    }
  }

  private initPlatformReady(): Promise<any> {
    return this.platform.ready()
      .then(() => {
        if (this.platform.is('cordova')) {
          this.initNativePlatformReady();
        }
      });
  }

  private initNativePlatformReady(): void {
    this.statusBar.styleDefault();
    this.splashScreen.hide();
  }

  private initAuthUser(): void {
    this.auth.user$
      .filter(user => user !== undefined)
      .debug('MyApp#initRootPage')
      .subscribe(user => this.initRootPage(user))
  }

  private initRootPage(user: User): void {
    this.hideLoading();
    if (user) {
      console.debug('set rootPage: TabsPage');
      this.rootPage = TabsPage;
    } else {
      console.debug('set rootPage: WelcomePage');
      this.rootPage = WelcomePage;
    }
  }
}
