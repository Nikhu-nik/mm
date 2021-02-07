import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../Service/data.service';

@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.page.html',
  styleUrls: ['./offerings.page.scss'],
})
export class OfferingsPage implements OnInit {
  public categories = [];
  myphoto: any;
  search: any;
  items;
constructor(private router:Router,private data: DataService){
 
  }
  
  

  ngOnInit() {
    this.categories = this.data.getCategories();
  }
  
  // getItems(ev) {
  //   // Reset items back to all of the items
  //   this.initializeItems();
  // // set val to the value of the ev target
  //   var val = ev.target.value;
  // // if the value is an empty string don't filter the items
  //   if (val && val.trim() != '') {
  //     this.items = this.items.filter((item) => {
  //       return (item.categoryname.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     })
  //   } 
  // }

  

  gotopostadd(demo){
    this.router.navigate(['/addpro'],{
         queryParams:demo
       });
     }
 

}