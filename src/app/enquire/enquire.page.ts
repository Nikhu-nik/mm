import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { RestService } from '../Service/rest.service';
import {  Product } from '../Model/class';
@Component({
  selector: 'app-enquire',
  templateUrl: './enquire.page.html',
  styleUrls: ['./enquire.page.scss'],
})
export class EnquirePage implements OnInit {
  products: Product[] = [];
  constructor( public rest: RestService,private call: CallNumber) { }

  ngOnInit() {
  }
  retrieval() {
    this.rest.getproductOfAdmin().subscribe((Product) => {
     if (Product === undefined) {
        console.log(Product);
      }
      else {
        console.log(Product.product);
        this.products = Product.product;
        
      }
    }, (err) => {
      console.log(err);
    });
  }

  callnow(productphone){
    this.call.callNumber(productphone, true)
     .then(res => console.log('Launched dialer!', res))
     .catch(err => console.log('Error launching dialer', err));
   
   }
}
