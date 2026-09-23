import {
  AsyncPipe,
  NgTemplateOutlet,
} from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { HomeCoarComponent } from '../../../../app/home-page/home-coar/home-coar.component';
import { HomeNewsComponent } from './home-news/home-news.component';
import { HomePageComponent as BaseComponent } from '../../../../app/home-page/home-page.component';
import { RecentItemListComponent } from '../../../../app/home-page/recent-item-list/recent-item-list.component';
import { ThemedTopLevelCommunityListComponent } from '../../../../app/home-page/top-level-community-list/themed-top-level-community-list.component';
import { ThemedConfigurationSearchPageComponent } from '../../../../app/search-page/themed-configuration-search-page.component';
import { ThemedSearchFormComponent } from '../../../../app/shared/search-form/themed-search-form.component';

import { CareersComponent } from '../shared/careers/careers.component';

@Component({
  selector: 'ds-themed-home-page',
  styleUrls: ['./home-page.component.scss'],
  //styleUrls: ['../../../../app/home-page/home-page.component.scss'],
   templateUrl: './home-page.component.html',
  ///templateUrl: '../../../../app/home-page/home-page.component.html',
    standalone: true,

  imports: [
    AsyncPipe,
    HomeCoarComponent,
    NgTemplateOutlet,
    RecentItemListComponent,
    ThemedConfigurationSearchPageComponent,
    HomeNewsComponent,
    ThemedSearchFormComponent,
    ThemedTopLevelCommunityListComponent,
    TranslateModule,

    CareersComponent
  ],
})
export class HomePageComponent extends BaseComponent {
}
