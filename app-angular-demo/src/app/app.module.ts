import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, isDevMode } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticleNewComponent } from './article-new/article-new.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesService } from './shared/articles.service';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ArticlesFilterComponent } from './articles-filter/articles-filter.component';
import { ManagerArticlesComponent } from './manager-articles/manager-articles.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register';
import { AlertComponent } from './_directives';
import { AppConfig } from './app.config';
import { AuthGuard } from './_guards';
import { AlertService, UserService, AuthenticationService } from './_services';
import { RouteComponent } from './shared/router.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    ArticleNewComponent,
    ArticleComponent,
    SearchBarComponent,
    ArticlesFilterComponent,
    ManagerArticlesComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    AlertComponent,
    RouteComponent,
    ArticleEditComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [ArticlesService,
    AppConfig,
    AuthGuard,
    AlertService,
    UserService,
    AuthenticationService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
  }
 }
