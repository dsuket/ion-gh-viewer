import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Platform } from 'ionic-angular';
import {User} from '../../models/user';
import { Storage } from '@ionic/storage';
import { Auth } from '@ionic/cloud-angular';

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
    private auth: Auth,
  ) {
    this.loadUser();
  }

  /**
   * login with github
   */
  loginWithGithub(): Observable<User> {
    const login$ = this.platform.is('cordova') ?
      this.loginWithGithubOnCordova() :
      this.loginWithGithubOnWeb();

    return login$
      .debug('loginWithGithub')
      .do(user => this.user$.next(user))
      .first();
  }

  /**
   * logout
   */
  logout(): Observable<void> {
    const logout$ = (this.platform.is('cordova') ?
      this.logoutWithGithubOnCordova() :
      this.logoutWithGithubOnWeb()
    );

    return logout$
      .debug('loginWithGithub')
      .do(() => this.user$.next(null))
      .first();
  }

  /**
   * load user from storage
   */
  private loadUser(): void {
    this.storage.get('user')
      .then(user => {
        console.log('this.storage.get', user);
        this.user$.next(user);
        this.user$
          .filter(u => user !== u)
          .subscribe(user => {
            console.log('this.storage.set', user);
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
   * logout with github on web
   * use firebase
   */
  private logoutWithGithubOnWeb(): Observable<void> {
    return Observable.fromPromise(this.afAuth.auth.signOut()).mapTo(undefined);
  }

  /**
   * login with github on cordoba
   * use inAppBrowser
   * not implements
   */
  private loginWithGithubOnCordova(): Observable<User> {
    return Observable.fromPromise(this.auth.login('github'))
      .mergeMap(result => {
        const githubCredential = firebase.auth.GoogleAuthProvider.credential(result.token);
        return firebase.auth().signInWithCredential(githubCredential);
      })
      .map(result => this.createUser(result));
  }

  /**
   * logout with github on cordoba
   * not implements
   */
  private logoutWithGithubOnCordova(): Observable<void> {
    return Observable.of(undefined);
  }

  private createUser(result: any): User {
    const {user, credential} = result;
    const options = {
      username: user.login,
      displayName: user.displayName,
      email: user.email,
      token: credential.accessToken
    };
    return new User(options);
  }

}
