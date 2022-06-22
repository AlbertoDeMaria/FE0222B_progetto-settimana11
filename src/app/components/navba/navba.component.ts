import { ProductsService } from './../../service/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navba',
  templateUrl: './navba.component.html',
  styleUrls: ['./navba.component.scss']
})
export class NavbaComponent implements OnInit {
  constructor(public productsSrv:ProductsService) { }

  ngOnInit(): void {
  }

}
