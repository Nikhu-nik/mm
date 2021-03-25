import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { PostAdd } from '../Model/class';
import { RestService } from '../Service/rest.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.page.html',
  styleUrls: ['./product-search.page.scss'],
})
export class ProductSearchPage implements OnInit {
   postadds: PostAdd[] = [];
   touched: boolean;
   showSkeleton: boolean;
   allData = []; //Store all data from provider
   filterData = [];//Store filtered data
   searchTerm: string = ''; // Binding with ngModel
   public items: any = [];
  constructor(public restservice: RestService,
     public loadingController:LoadingController) { 
      this.items = [
        { title: "one" },
        { title: "two" },
        { title: "three" },
        { title: "four" },
        { title: "five" },
        { title: "six" }
      ];
     
     }
    
 
  ngOnInit() {
  this.retrival();
 
  }

 

  retrival(){
    this.restservice.getproductOfUser().subscribe((PostAdd) => {
     if(PostAdd === undefined) {
        console.log(PostAdd);
      }
      else {
        console.log(PostAdd.postadd);
        this.postadds = PostAdd.postadd;

      }
    
    } , (err) => {
      console.log(err);
    })
  }

 

  //search(ev: any) {
    // this.loadingController.create({
    // mode:'ios', 
    //   duration: 4000,
    //   spinner: 'crescent',
    // }).then((ele)=>{
    //   ele.present();  
    // })
  //   this.touched = false;
  //   this.postadds = [];
  //   this.showSkeleton = true;
  //   this.restservice.getproductOfUser().subscribe((prods: PostAdd[]) => {
  //     if (prods.length <=0 ) {
  //        this.touched = true;
  //     } else {
  //       this.touched = false;
  //     }

  //     this.showSkeleton = false;
  //     this.postadds = this.postadds;
  //   }, err => console.log(err));
  // }
//}
}
  
