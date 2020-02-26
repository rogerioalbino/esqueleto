import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutLoginComponent } from './shared/templates/layout-login/layout-login.component';
import { LayoutAppComponent } from './shared/templates/layout-app/layout-app.component';

import { LoginComponent } from './modules/login/login.component';
import { SignupComponent } from './modules/signup/signup.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ProdutoComponent } from './modules/produto/produto.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutLoginComponent,
    LayoutAppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
