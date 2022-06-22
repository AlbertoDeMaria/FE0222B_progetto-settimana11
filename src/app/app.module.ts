import { ProdottiComponent } from './components/prodotti/prodotti.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbaComponent } from './components/navba/navba.component';
import { HomeComponent } from './components/home/home.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

const routes: Route[] = [
  {
      path:'',
      component: HomeComponent
  },
  {
    path:'product/:id/:name/:price/:description',
    component: ProdottiComponent
  },
  {
    path:'cart',
    component: CarrelloComponent
  },
  {
    path: 'thankyou',
    component: ThankYouComponent
  },
  {
    path:'**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbaComponent,
    HomeComponent,
    CarrelloComponent,
    ProdottiComponent,
    NotFoundComponent,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, HttpClientModule]
})
export class AppModule { }
