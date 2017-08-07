import { Component } from '@angular/core';

// ほんとは package.json から持ってきたい。
// ionic の custom webpack config とか使えばできそうだが
// とりえあえずいまはべたで書く
const datas = {
    "name": "ion-gh-viewer",
    "description": "ionic github viewer sample",
    "version": "0.0.1",
    "author": "dsuket",
    "homepage": "https://github.com/dsuket/ion-gh-viewer",
    "dependencies": {
        "@angular/common": "4.1.3",
        "@angular/compiler": "4.1.3",
        "@angular/compiler-cli": "4.1.3",
        "@angular/core": "4.1.3",
        "@angular/forms": "4.1.3",
        "@angular/http": "4.1.3",
        "@angular/platform-browser": "4.1.3",
        "@angular/platform-browser-dynamic": "4.1.3",
        "@ionic-native/core": "3.12.1",
        "@ionic-native/splash-screen": "3.12.1",
        "@ionic-native/status-bar": "3.12.1",
        "@ionic/cloud-angular": "^0.12.0",
        "@ionic/storage": "2.0.1",
        "ajv": "^5.2.2",
        "angularfire2": "^4.0.0-rc.1",
        "apollo-angular": "^0.13.0",
        "apollo-client": "^1.8.1",
        "cordova-ios": "^4.4.0",
        "cordova-plugin-browsertab": "^0.2.0",
        "cordova-plugin-buildinfo": "^1.1.0",
        "cordova-plugin-compat": "^1.1.0",
        "cordova-plugin-console": "^1.0.5",
        "cordova-plugin-customurlscheme": "^4.3.0",
        "cordova-plugin-device": "^1.1.4",
        "cordova-plugin-inappbrowser": "~1.7.1",
        "cordova-plugin-splashscreen": "^4.0.3",
        "cordova-plugin-statusbar": "^2.2.2",
        "cordova-plugin-whitelist": "^1.3.1",
        "cordova-universal-links-plugin": "^1.2.1",
        "firebase": "^4.1.3",
        "graphql-tag": "^2.4.2",
        "ionic-angular": "^3.6.0",
        "ionic-plugin-keyboard": "^2.2.1",
        "ionicons": "3.0.0",
        "moment": "^2.18.1",
        "promise-polyfill": "^6.0.2",
        "rxjs": "^5.4.0",
        "sw-toolbox": "3.6.0",
        "zone.js": "0.8.12"
    },
    "devDependencies": {
        "@ionic/app-scripts": "^2.1.3",
        "@ionic/cli-plugin-cordova": "1.6.2",
        "@ionic/cli-plugin-ionic-angular": "1.4.1",
        "ionic": "3.7.0",
        "ts-graphql-plugin": "^1.1.0",
        "typescript": "2.3.4"
    },
};

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  info: any;
  dependencies: any;
  devDependencies: any;

  constructor() {
  }

  ionViewDidLoad(): void {
    const {name, description, version, author, homepage} = datas;
    this.info = {name, description, version, author, homepage};
    this.dependencies = datas.dependencies;
    this.devDependencies = datas.devDependencies;
  }

}
