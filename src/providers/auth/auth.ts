import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Platform, LoadingController } from 'ionic-angular';
import {User} from '../../models/user';
import { Storage } from '@ionic/storage';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthProvider {

  public user$ = new BehaviorSubject<User>(undefined);

  constructor(
    private platform: Platform,
    private storage: Storage,
    private afAuth: AngularFireAuth,
    private loadingCtrl: LoadingController,
  ) {
    this.loadUser().subscribe();
  }

  /**
   * login with github
   */
  loginWithGithub(): Observable<User> {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    loader.present();

    const login$ = this.platform.is('cordova') ?
      this.loginWithGithubOnCordova() :
      this.loginWithGithubOnWeb();

    return login$
      .debug('loginWithGithub')
      .do(user => this.user$.next(user))
      .first()
      .finally(() => loader.dismiss());
  }

  /**
   * logout
   */
  logout(): Observable<void> {
    return Observable.fromPromise(this.afAuth.auth.signOut())
      .mapTo(null)
      .debug('logout')
      .do(user => this.user$.next(user))
      .first();
  }

  /**
   * load user from storage
   */
  private loadUser(): Observable<User> {
    return Observable.fromPromise(this.storage.get('user'))
      .debug('loadUser')
      .do(user => {
        this.user$.next(user);
        this.user$
          .filter(u => user !== u)
          .subscribe(user => {
            console.debug('storage.set', user);
            this.storage.set('user', user);
          });
      });
  }

  /**
   * login with github on web
   * use firebase
   */
  private loginWithGithubOnWeb(): Observable<User> {
    const githubProvider = new firebase.auth.GithubAuthProvider();
    githubProvider.addScope('repo');
    githubProvider.addScope('read:org');
    return Observable.fromPromise(this.afAuth.auth.signInWithPopup(githubProvider))
      .map(result => this.createUser(result));
  }

  /**
   * login with github on cordoba
   * use inAppBrowser
   * not implements
   */
  private loginWithGithubOnCordova(): Observable<User> {
    const githubProvider = new firebase.auth.GithubAuthProvider();
    githubProvider.addScope('repo');
    githubProvider.addScope('read:org');
    return Observable.fromPromise(this.afAuth.auth.signInWithRedirect(githubProvider))
      .debug('loginWithGithubOnCordova: signInWithRedirect')
      .mergeMap(() => this.afAuth.auth.getRedirectResult())
      .debug('loginWithGithubOnCordova: getRedirectResult')
      .map(result => this.createUser(result));

  }

  private createUser(result: any): User {
    const {user, additionalUserInfo, credential} = result;
    const options = {
      username: additionalUserInfo.profile.login,
      displayName: user.displayName,
      email: user.email,
      token: credential.accessToken,
      avatarUrl: additionalUserInfo.profile.avatar_url,
    };
    return new User(options);
  }

}
