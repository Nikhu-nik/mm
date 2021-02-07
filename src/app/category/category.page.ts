import { Component, OnInit } from '@angular/core';
import {DataService} from '../Service/data.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  public categories = [];
  constructor(private data: DataService) { }

  ngOnInit() {
    this.categories = this.data.getCategories();
   
  }
 
}
