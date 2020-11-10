import { Component, OnInit ,ViewChild,} from '@angular/core';
import { RestService } from '../Service/rest.service';
import { MatTableDataSource } from '@angular/material/table';
import {style, state, animate, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-product-list',
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ],

  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  arr;
  userid;
  listDatas;
  photo;
  tableStyle = 'bootstrap';
  isItemAvailables:boolean=true;
  isItemAvailable:boolean=true;
  show = false;
  listData;
 //listData: MatTableDataSource<any>;
  displayedColumns: string[] = [  'userId' ,'category','name', 'price', 'quant', 'desc', 
  'productphone','productfullname','city','edit'];
  content: any;
  constructor(public rest: RestService) { }
 

  ngOnInit() {
    this.retrieval();

    this.getuserDetails();
  }
  
  toggle() {
    this.show = !this.show;
  }

  get stateName() {
    return this.show ? 'show' : 'hide'
  }



 switchStyle(){
  if(this.tableStyle=='dark'){
    this.tableStyle='bootstrap';
console.log("kjkjkjkj");
  }else{
    this.tableStyle='dark';
  //  console.log("kjkjkjkj");  
  }
}

getItems(ev: any) {
  this.listDatas=this.listData;

const val = ev.target.value.toLowerCase();
if (val && val.trim() != ''){
  this.isItemAvailables = true;
  this.isItemAvailable = false;
this.listDatas= this.listData.filter((item => {
    return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
    }
    )
  )

}
else{
  this.isItemAvailable=true;
  this.isItemAvailables=false;
}
}



  getuserDetails() {
    this.rest.userprofile().subscribe((result) => {
      if (result === undefined) {
        console.log(result);

      }
      else {
        this.arr = Object.entries(result).map(([type, value]) => ({ type, value }));
        this.userid = this.arr[0].value;
        console.log(this.userid);

        this.photo = this.userid.photo;
      }
    }, (err) => {
      console.log(err);
    });
  }



  retrieval() {
    this.rest.getdashboardproduct().subscribe((result) => {
      console.log(result);
      if (result === undefined) {
        console.log(result);
      }
      else {
      
        this.arr = Object.entries(result).map(([type, value]) => ({ type, value }));
        this.listData = this.arr[0].value;
        // this.listData = new MatTableDataSource(this.arr[1].value);
      }
    }, (err) => {
      console.log(err);
    });
  }
 


  doRefresh(event) {
    //console.log('Begin async operation');
    this.retrieval();
    this.getuserDetails();
    setTimeout(() => {
      //console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
