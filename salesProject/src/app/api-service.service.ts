import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  outputofDisdetails!:any;
  constructor(private http:HttpClient) { 
    // this.http.get("https://localhost:44367/api/Scorpio/GetOfDisProfile/{PAN}");
  }
  Login(username:string|any,password:string|any){
      this.http.get("https://localhost:44367/api/Scorpio/GetOfDisProfile/"+username+"/"+password).subscribe(e=>{
        this.outputofDisdetails=e;
        setTimeout(() => {
          this.outputofDisdetails = null
        }, 2000)
  });
  }
}
