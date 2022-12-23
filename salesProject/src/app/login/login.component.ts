import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  currentDate=new Date();
  changing:string="Select The User Type";
  constructor(){
  
  }
}
