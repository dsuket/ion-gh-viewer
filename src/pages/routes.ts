import { DeepLinkConfig } from 'ionic-angular';
import {HomePage} from './home/home';
import {RepoPage} from './repo/repo';
import {SettingPage} from './setting/setting';
import {WelcomePage} from './welcome/welcome';
import {TabsPage} from './tabs/tabs';

export const deepLinkConfig: DeepLinkConfig = {
  links: [
    { component: TabsPage, segment: 'tabs' },
    { component: HomePage, name: "home", segment: "home"},
    { component: RepoPage, name: "repo", segment: "repo/:owner/:name", defaultHistory: [HomePage] },
    { component: SettingPage, name: "setting", segment: "setting"},
    { component: WelcomePage, name: "welcome", segment: "welcome"},
  ]
};
