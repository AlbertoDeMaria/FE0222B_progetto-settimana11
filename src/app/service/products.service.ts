import { Products } from './../models/products';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http:HttpClient) { }

  //link del db
  link:string="http://localhost:4201";

  //array del carrello
  cart:Products[] = [];

  //fetch dei prodotti dal db
  fetchProducts() {
    return this.http.get<Products[]>(this.link + '/products')
  }

}
