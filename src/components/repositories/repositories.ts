import { Component, Input } from '@angular/core';
import {NavController} from 'ionic-angular';
import {RepoPage} from '../../pages/repo/repo';

/**
 * Generated class for the RepositoriesComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'repositories',
  templateUrl: 'repositories.html'
})
export class RepositoriesComponent {

  @Input()
  title: string;

  @Input()
  repos: GQL.IRepository[];

  constructor(
    private navCtrl: NavController
  ) {}

  openRepo(repo: GQL.IRepository): void {
    const params = {
      repo,
      name: repo.name,
      owner: repo.owner.login,
    }
    this.navCtrl.push(RepoPage, params);
  }


}
