import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
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
  totalCount: number;

  @Input()
  repos: GQL.IRepository[];

  @Output()
  selectRepo = new EventEmitter<GQL.IRepository>()

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) {
  }

  clickRepo(repo: GQL.IRepository): void {
    this.selectRepo.emit(repo);
  }

  showMore(): void {
    this.alertCtrl.create({
      title: 'Not implements!',
      message: 'This feature yet implements.',
      buttons: ['Dismiss']
    }).present();
  }

}
