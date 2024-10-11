import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import {NgOptimizedImage} from "@angular/common";
import { SearchComponent } from './list-categories/search/search.component';
import {FormsModule} from "@angular/forms";
import { CategorieComponent } from './list-categories/categorie/categorie.component';
import { FilterComponent } from './list-categories/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListCategoriesComponent,
    SearchComponent,
    CategorieComponent,
    FilterComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage,
        FormsModule,
        //NgModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
