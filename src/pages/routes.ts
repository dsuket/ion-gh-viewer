import { DeepLinkConfig } from 'ionic-angular';
import {HomePage} from './home/home';
import {RepoPage} from './repo/repo';
import {SettingPage} from './setting/setting';
import {WelcomePage} from './welcome/welcome';
import {TabsPage} from './tabs/tabs';
import {IssuesPage} from './issues/issues';

export const deepLinkConfig: DeepLinkConfig = {
  links: [
    { component: TabsPage, name: "TabsPage", segment: 'tabs' },
    { component: HomePage, name: "HomePage", segment: "home"},
    { component: RepoPage, name: "RepoPage", segment: "repo/:owner/:name", defaultHistory: [HomePage] },
    { component: IssuesPage, name: "IssuesPage", segment: "repo/:owner/:name/issues", defaultHistory: [HomePage] },
    { component: SettingPage, name: "SettingPage", segment: "setting"},
    { component: WelcomePage, name: "WelcomePage", segment: "welcome"},
  ]
};
