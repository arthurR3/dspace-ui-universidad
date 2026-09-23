import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { SearchComponent as BaseSearchComponent } from 'src/app/shared/search/search.component';
import { SearchFormComponent } from '../../../../../app/shared/search-form/search-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { ThemedSearchFormComponent } from "src/app/shared/search-form/themed-search-form.component";


import { SearchComponent as BaseComponent } from '../../../../../app/shared/search/search.component';
import { SearchLabelsComponent } from '../../../../../app/shared/search/search-labels/search-labels.component';
import { ThemedSearchResultsComponent } from '../../../../../app/shared/search/search-results/themed-search-results.component';
import { ThemedSearchSidebarComponent } from '../../../../../app/shared/search/search-sidebar/themed-search-sidebar.component';
import { PageWithSidebarComponent } from '../../../../../app/shared/sidebar/page-with-sidebar.component';
import { ViewModeSwitchComponent } from '../../../../../app/shared/view-mode-switch/view-mode-switch.component';

@Component({
  selector: 'ds-themed-search',
  standalone: true,
  imports: [
    AsyncPipe,
    NgTemplateOutlet,
    PageWithSidebarComponent,
    SearchLabelsComponent,
    ThemedSearchFormComponent,
    ThemedSearchResultsComponent,
    ThemedSearchSidebarComponent,
    TranslateModule,
    ViewModeSwitchComponent,
    SearchFormComponent
  ],
  //templateUrl: '../../../../../app/shared/search/search.component.html',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent extends BaseSearchComponent {

}
