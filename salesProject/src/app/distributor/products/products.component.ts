import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productlist:any;
  constructor(private ds:ApiServiceService,private http:HttpClient){
    this.http.get("https://localhost:44367/api/Scorpio/GetProduct").subscribe(e=>{this.productlist=e;});

  }
}
