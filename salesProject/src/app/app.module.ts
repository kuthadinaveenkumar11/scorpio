import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms';
=======
import {MatMenuModule} from '@angular/material/menu';
>>>>>>> 0784041b5a245a4548b1a068eb623e2142c46fa9

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    BrowserAnimationsModule,MatToolbarModule,MatButtonModule,MatIconModule,ReactiveFormsModule
=======
    BrowserAnimationsModule,MatToolbarModule,MatButtonModule,MatIconModule,MatMenuModule,MatButtonModule
>>>>>>> 0784041b5a245a4548b1a068eb623e2142c46fa9
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
