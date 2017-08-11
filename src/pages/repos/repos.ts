import {Component} from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html',
})
export class ReposPage {

  repos: GQL.IRepository[];

  constructor(private navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.repos = this.navParams.get('repos') || [];
  }

}
