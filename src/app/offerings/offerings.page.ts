import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.page.html',
  styleUrls: ['./offerings.page.scss'],
})
export class OfferingsPage implements OnInit {
  myphoto: any;
  public isSearchbarOpened = false;
  public searchTerm: string = "";
  //public items: any;
  items;
constructor(private router:Router){
  this.initializeItems();
  }
  
  initializeItems() {
    this.items = [
    
    { id:1,ImageCategory : '../../assets/mic/food.png', categoryname: 'Vegetables'},
    { id:2,ImageCategory :  '../../assets/mic/fruits.png',categoryname: 'Fruits'},
    { id:3,ImageCategory :  '../../assets/mic/nut.png',categoryname: 'Nuts'},
    { id:4,ImageCategory :  '../../assets/mic/flower (1).png',categoryname: 'Spices'},
    { id:5,ImageCategory :  '../../assets/mic/soil.png',categoryname: 'Seeds'},
    { id:6,ImageCategory :  '../../assets/mic/salad.png',categoryname: 'Bevarages'},
    { id:7,ImageCategory :  '../../assets/mic/edibleoil.png',categoryname: 'Edible Oil'},
    {id:8 ,ImageCategory :  '../../assets/mic/seed (1).png',categoryname: 'Fertilizers'}
  ];
} 

  ngOnInit() {
    this.initializeItems();
  }
  
  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();
  // set val to the value of the ev target
    var val = ev.target.value;
  // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.categoryname.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  

  gotopostadd(demo){
    this.router.navigate(['/addpro'],{
         queryParams:demo
       });
     }
 

}