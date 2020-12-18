import { Component, OnInit } from '@angular/core';
import { LoadingController, Platform } from '@ionic/angular';
import { Observable, Subject, merge } from 'rxjs'
import { RestService } from '../Service/rest.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Register, Product, PostAdd } from '../Model/class';
@Component({
  selector: 'app-product-search-page',
  templateUrl: './product-search-page.page.html',
  styleUrls: ['./product-search-page.page.scss'],
})
export class ProductSearchPagePage implements OnInit {
  products: Product[] = [];
  postadds: PostAdd[] = [];
  states:any;
  ar;
  arr;
  constructor(public loadingController: LoadingController,
   private call: CallNumber,
   public platform: Platform, 
    
    public rest: RestService,) { }

  ngOnInit() {
    this.retrieval();
 
  }
  async searchProduct(){
    const loading = await this.loadingController.create({
      message:"Getting Data..",
     duration: 20000,
      spinner: "crescent",
      cssClass: 'my-loader'
    });
    await loading.present();
console.log('Loading dismissed!');
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

  //Mapping Products Posted by Admin
  adminpostedgetproduct() {
    this.rest.MapAdminProduct().subscribe((result) => {
        console.log(result);
       if (result == undefined) {
           console.log(result);
         }
         else { 
           console.log(result);
           this.arr = Object.entries(result).map(([type, value]) => ({ type, value }));
           this.states = this.arr[0].value;
   }
       }, (err) => {
         console.log(err);
        
       });
     }
}
