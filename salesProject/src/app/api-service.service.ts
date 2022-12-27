import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { 
    this.http.get("https://localhost:44367/api/Scorpio/GetOfDisProfile/{PAN}");
  }
}
