import { ProductsService } from '../../service/products.service';
import { Products } from '../../models/products';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  readMore:boolean = false;
  isLoading:boolean = true;
  error:string | undefined;

  products!:Products[];
  constructor(private http:HttpClient, private productSrv:ProductsService) {}

  ngOnInit() {
    //loading
    this.isLoading = true;
    //fetch del service
    this.productSrv.fetchProducts().subscribe(ris => {
      console.log(ris);
      //loading
      this.isLoading = false;
      //riempio l'array con ris
      this.products = ris;
    }, (error)=>{
      //gestisco l'errore
    this.error = error.message
    console.log(error);
  })
}

addToCart(id:number){
  this.productSrv.cart.push(this.products[id]);
}

}
