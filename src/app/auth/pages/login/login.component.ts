import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user!: User;

  constructor(private _userService:UsersService, private router:Router) {
    this.init();
   }

  ngOnInit(): void {
  }

  init(){
    this.user = {
      created_at: '',
      email: '',
      id: 0,
      password: '',
      person_id:0,
      rol:'',
      status:'',
      updated_at:'',
      username:''
    }
  }

  validateData(){
    const regex = /^[A-Za-z0-9]+$/g;
    let validation = {success:false,message:'initalized message'};
    
    if(!regex.test(this.user.username) || !regex.test(this.user.password)){
        validation = {
          success:false,
          message: 'Invalid username or password, only letters and numbers'
        };
    }else{
      validation = {
        success:true,
        message: 'valid username',
      }
      
    }

    return validation;
  }

  submit(){
    const result = this.validateData();
    
    if(result.success){
      this.verifyUser();
    }else{
      alert(result.message);
      
    }
    this.cleanForm();
  }

  verifyUser(){

    this._userService.searchUser(this.user).subscribe(res=>{
      if(res.success){
        this.router.navigate(['auth/crud']);
      }else{
        alert(res.message);
      }
    });
  }

  cleanForm(){
    this.user.username = '';
    this.user.password = '';
  }
}
