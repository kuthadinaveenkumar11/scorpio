import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  currentDate=new Date();
  loginform=new FormGroup({
    Uname:new FormControl('naveen11'),
    Pssword:new FormControl('12345')
  })
}
