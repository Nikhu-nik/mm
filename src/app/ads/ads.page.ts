import { Component, OnInit } from '@angular/core';
import { RestService } from '../Service/rest.service';
import { Register, Product, PostAdd } from '../Model/class';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-ads',
  templateUrl: './ads.page.html',
  styleUrls: ['./ads.page.scss'],
})
export class AdsPage implements OnInit {
  selectTabs = 'ADS';
  myphoto: any;
  products: Product[] = [];
  imgbase;
  public data: Register = new Register();
  constructor( private menu: MenuController, public rest: RestService,) { }

  ngOnInit() {
    this.retrieval();
  }
  openMenu(){
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  ionViewWillEnter(){
    this.retrieval();
    this.show();
  }
  show(){
    console.log('Fired');
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


  doRefresh(event) {
    this.retrieval();
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}

