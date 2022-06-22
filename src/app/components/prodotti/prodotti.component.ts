import { Products } from './../../models/products';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.scss']
})
export class ProdottiComponent implements OnInit {

  quantity:number = 1;
  products!:Products;
  constructor(private router:ActivatedRoute, private productSrv:ProductsService) { }

  ngOnInit(): void {
    //imposto l'Activated Route
    this.products = {
      description: this.router.snapshot.params['description'],
      id:this.router.snapshot.params['id'],
      name:this.router.snapshot.params['name'],
      price:this.router.snapshot.params['price']
    }
  }

  addToCart(){
    for (let i = 0; i < this.quantity; i++){
      this.productSrv.cart.push(this.products);
      console.log(this.productSrv.cart);
    }
  }

  moreQ(){
    if(this.quantity < 10){
      this.quantity++;
    } else {
      alert("Non puoi comprare più di 10 elementi")
    }
  }

  lessQ(){
    if(this.quantity > 1){
      this.quantity--;
    } else {
      alert("La quantità è già al minimo")
    }
  }

}
