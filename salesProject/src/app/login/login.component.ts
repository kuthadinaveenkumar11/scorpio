import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  currentDate=new Date();
  changing:string="Select The User Type";
  passwordchanging:string="Select The User Type";
  loginform=new FormGroup({
    Uname:new FormControl('naveen11'),
    Pssword:new FormControl('12345')
  })
  constructor(private routee:Router) { }

  ngOnInit(): void {
  }
  onClick(){
    if(this.loginform.value.Uname=='naveen11'&&this.loginform.value.Pssword=='12345')
    {
    this.routee.navigate(['table']);
    }
    else{
      console.log(this.loginform.value);
    alert("enter crt");
    }
  }
  Distributor(){
      this.changing="Enter the Distributor Mail";
      this.passwordchanging="Enter the Distributor Password";
  }
  Authorizer(){

  }
  Warehouse(){}
  Admin(){}
  
}
  


