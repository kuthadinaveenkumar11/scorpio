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
  disabled=true;
  
  loginform=new FormGroup({
    Uname:new FormControl(''),
    Pssword:new FormControl(''),
    dis:new FormControl('')
  })
  constructor(private routee:Router) { }

  ngOnInit(): void {

  }
  onClick(){
    console.log(this.loginform.value);

    if(this.loginform.value.dis=="Distributorvalue")
    {
      console.log(this.loginform.value.dis);

      if(this.loginform.value.Uname=='Dis'&&this.loginform.value.Pssword=='12345')
    {
    this.routee.navigate(['Distributor']);
    }
    else{
    alert("enter crt");
    }
    }
    else if (this.loginform.value.dis=="Authorizervalue"){
      if(this.loginform.value.Uname=='auth'&&this.loginform.value.Pssword=='12345')
    {
    this.routee.navigate(['Authorizer']);
    }
    else{
    alert("enter crt");
    }
    }
    else if (this.loginform.value.dis=="warehousevalue"){
      if(this.loginform.value.Uname=='ware'&&this.loginform.value.Pssword=='12345')
      {
        this.routee.navigate(['Warehouse']);
      }
      else{
        alert("enter crt");
      }
    }
    else if (this.loginform.value.dis=="adminvalue"){
      if(this.loginform.value.Uname=='admin'&&this.loginform.value.Pssword=='12345')
    {
    this.routee.navigate(['Admin']);
    }
    else{
    alert("enter crt");
    }
    }
    else{
    alert("Select the user ")
    }
  }
  Distributor(){
      this.changing="Enter the Distributor Mail";
      this.passwordchanging="Enter the Distributor Password";
      this.loginform.value.dis="Distributorvalue";
      this.disabled=false;
      console.log(this.loginform.value);



  }
  Authorizer(){
    this.changing="Enter the Authorizer Mail";
    this.passwordchanging="Enter the Authorizer Password";
    this.disabled=true;
    this.loginform.value.dis="Authorizervalue";


  }
  Warehouse(){
    this.changing="Enter the Warehouse Mail";
    this.passwordchanging="Enter the Warehouse Password";
    this.disabled=true;
    this.loginform.value.dis="warehousevalue";


  }
  Admin(){
    this.changing="Enter the Admin Mail";
    this.passwordchanging="Enter the Admin Password";
    this.disabled=true;
    this.loginform.value.dis="adminvalue";


  }
  register(){
    if(this.loginform.value.dis=="Distributorvalue"){
      this.routee.navigate(['Distributor/disregis']);
    }
    else if(this.loginform.value.dis=="warehousevalue"){
      this.routee.navigate(['Distributor/disregis']);
    }
  }
}
  


