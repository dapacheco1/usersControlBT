import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { BaseLoginComponent } from './base-login/base-login.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderAuthComponent } from './components/header-auth/header-auth.component';


@NgModule({
  declarations: [
    BaseLoginComponent,
    LoginComponent,
    RegisterComponent,
    HeaderAuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
