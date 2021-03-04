import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo } from '@angular/fire/auth-guard';

import { SecureInnerPagesGuard } from './guards/secure-inner-pages.guard';
import { AuthenticationGuard } from './guards/authentication.guard';

import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['sign-in']);

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthenticationGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: HomeComponent }
    ]
  },
  {
    path: 'sign-in',
    canActivate: [SecureInnerPagesGuard],
    component: SignInComponent
  },
  { 
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
