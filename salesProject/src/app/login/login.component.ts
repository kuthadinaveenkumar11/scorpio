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
    Uname:new FormControl(''),
    Pssword:new FormControl(''),
    dis:new FormControl('')
  })
  constructor(private routee:Router) { }

  ngOnInit(): void {
  }
  onClick(){
    if(this.loginform.value.dis=="Distu")
    {
      if(this.loginform.value.Uname=='naveen11'&&this.loginform.value.Pssword=='12345')
    {
    this.routee.navigate(['Distributor']);
    }
    else{
      console.log(this.loginform.value);
    alert("enter crt");
    }
    }
    else{
    alert("Select the user ")}


    
  }
  Distributor(){
      this.changing="Enter the Distributor Mail";
      this.passwordchanging="Enter the Distributor Password";
      this.loginform.value.dis="Distu";
  }
  Authorizer(){
    this.changing="Enter the Authorizer Mail";
    this.passwordchanging="Enter the Authorizer Password";
  }
  Warehouse(){
    this.changing="Enter the Warehouse Mail";
    this.passwordchanging="Enter the Warehouse Password";
  }
  Admin(){
    this.changing="Enter the Admin Mail";
    this.passwordchanging="Enter the Admin Password";
  }
}
  


