import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLoginComponent } from './base-login/base-login.component';
import { CrudComponent } from './pages/crud/crud.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path:'',
    component:BaseLoginComponent,
    children:[
      {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'register',
        component:RegisterComponent
      },
      {
        path:'crud',
        component:CrudComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
