import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

// ionic-native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
// Pages
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome';
import { AccountsPage } from '../pages/accounts/accounts';
import { RepoPage } from '../pages/repo/repo';
import { ReposPage } from '../pages/repos/repos';
import { IssuesPage } from '../pages/issues/issues';

// Providers
import { AuthProvider } from '../providers/auth/auth';
import { GithubApiProvider } from '../providers/github-api/github-api';

// AF2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

// Appolo
import { ApolloModule } from 'apollo-angular';
import {provideClient} from '../misc/appolo/github-gql-client';

// DeepLink
import {deepLinkConfig} from '../pages/routes';

import '../misc/operator/debug';
import { RepositoriesComponent } from '../components/repositories/repositories';
import {IssuePage} from '../pages/issue/issue';
import {PipesModule} from '../pipes/pipes.module';

const ionicConfig = {
  pageTransition: 'ios-transition',
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    AccountsPage,
    RepoPage,
    ReposPage,
    IssuesPage,
    IssuePage,
    RepositoriesComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, ionicConfig, deepLinkConfig),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    IonicStorageModule.forRoot(),
    ApolloModule.forRoot(provideClient),
    PipesModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    AccountsPage,
    RepoPage,
    ReposPage,
    IssuesPage,
    IssuePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    GithubApiProvider,
  ]
})
export class AppModule {}
