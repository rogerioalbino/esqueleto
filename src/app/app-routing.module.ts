import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutAppComponent } from './shared/templates/layout-app/layout-app.component';
import { LayoutLoginComponent } from './shared/templates/layout-login/layout-login.component';

import { LoginComponent } from './modules/login/login.component';
import { ProdutoComponent } from './modules/produto/produto.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutLoginComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  {
    path: '',
    component: LayoutAppComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'produto', component: ProdutoComponent },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
