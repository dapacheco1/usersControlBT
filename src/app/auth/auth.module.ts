import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { BaseLoginComponent } from './base-login/base-login.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HeaderAuthComponent } from './components/header-auth/header-auth.component';

import { FormsModule } from '@angular/forms';
import { CrudComponent } from './pages/crud/crud.component';

@NgModule({
  declarations: [
    BaseLoginComponent,
    LoginComponent,
    RegisterComponent,
    HeaderAuthComponent,
    CrudComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
