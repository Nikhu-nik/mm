import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  items;
  constructor() { }

  ngOnInit() {
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
}
