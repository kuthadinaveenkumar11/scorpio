import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';


import {MatInputModule} from '@angular/material/input';
import { DistributorModule } from './distributor/distributor.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatToolbarModule,MatButtonModule,MatIconModule,MatMenuModule,MatButtonModule,MatInputModule,
    DistributorModule,
    AppRoutingModule,ReactiveFormsModule,FormsModule,
    BrowserAnimationsModule,MatToolbarModule,MatButtonModule,MatIconModule,
    MatMenuModule,MatButtonModule,
    MatInputModule,MatToolbarModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
