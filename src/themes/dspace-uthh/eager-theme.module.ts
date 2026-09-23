 /* eslint-disable dspace-angular-ts/themed-component-usages */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootModule } from '../../app/root.module';
import { FooterComponent } from './app/footer/footer.component';
import { HeaderNavbarWrapperComponent } from './app/header-nav-wrapper/header-navbar-wrapper.component';
import { HeaderComponent } from './app/header/header.component';
import { HomePageComponent } from './app/home-page/home-page.component';
import { SearchComponent } from './app/shared/search/search.component';
import { SearchPageComponent } from './app/search-page/search-page.component';
import { SearchFiltersComponent } from './app/shared/search/search-filters/search-filters.component';
import { SearchSidebarComponent } from './app/shared/search/search-sidebar/search-sidebar.component';
import { HomeNewsComponent } from './app/home-page/home-news/home-news.component';
import { NavbarComponent } from './app/navbar/navbar.component';
 

 /**
  * Add components that use a custom decorator to ENTRY_COMPONENTS as well as DECLARATIONS.
  * This will ensure that decorator gets picked up when the app loads
  */
 const ENTRY_COMPONENTS = [];
 
 const DECLARATIONS = [
   ...ENTRY_COMPONENTS,
   FooterComponent,
   HeaderNavbarWrapperComponent,
   HeaderComponent,
   HomePageComponent,
   SearchPageComponent,
   SearchSidebarComponent,
   SearchComponent,
   HomeNewsComponent,
   NavbarComponent,
 ];
 
 @NgModule({
  imports: [
    CommonModule,
    RootModule,
    ...DECLARATIONS,
  ],
 providers: [
    ...ENTRY_COMPONENTS.map((component) => ({ provide: component })),
  ],
 })

 export class EagerThemeModule {}