import { User } from './../../models/user';
import { Products } from './../../models/products';
import { ProductsService } from './../../service/products.service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {

  isSomething:boolean = false;
  cart!:Products[];
  name!:string;
  address!:string;
  order!:User;
  surname!:string;

  constructor(private productsSrv:ProductsService,private router: Router) { }

  ngOnInit(): void {
    //rimepio l'array con l'array nel service
    this.cart = this.productsSrv.cart;

    //controllo se c'è qualcosa dentro
    if(this.cart.length != 0){
      this.isSomething = true;
      console.log(this.isSomething);
    }
  }

  sendOrder(){
    //controllo il form
    if (this.name != null && this.surname != null && this.address != null){
      //creo l'ordine
      this.order = {name:this.name, address:this.address, surname:this.surname};
      this.emptyCart();
      this.router.navigate(['/thankyou']);
    } else {
      alert("Inserisci tutti i dati nel form");
      console.log("Errore");
    }
  }

  //elimino il prodotto
  deleteProduct(id:number){
    this.cart.splice(id, 1);
    if(this.cart.length == 0){
      this.isSomething = false;
    }
  }

  //svuoto il cestino
  emptyCart(){
    this.productsSrv.cart.splice(0, this.productsSrv.cart.length);
    this.isSomething = false;
  }


  emptyForm(){
    if (this.name != "" || this.surname != "" || this.address != ""){
      this.name = ""
      this.surname = ""
      this.address = ""
    } else {
      alert("Il form è vuoto")
    }
  }

}
