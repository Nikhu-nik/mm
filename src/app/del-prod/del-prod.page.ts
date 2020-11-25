import { Component, OnInit } from '@angular/core';
import { RestService } from '../Service/rest.service';
@Component({
  selector: 'app-del-prod',
  templateUrl: './del-prod.page.html',
  styleUrls: ['./del-prod.page.scss'],
})
export class DelProdPage implements OnInit {
  arr;
  userid;
  demo;
  constructor(public rest: RestService) { }

  ngOnInit() {
    this.retrieval();
  }
  retrieval() {
    this.rest.getdashboardproduct().subscribe((result) => {
      console.log(result);
      if (result === undefined) {
        console.log(result);
      }
      else {
      
        this.arr = Object.entries(result).map(([type, value]) => ({ type, value }));
        this.demo = this.arr[0].value;
        // this.listData = new MatTableDataSource(this.arr[1].value);
      }
    }, (err) => {
      console.log(err);
    });
  }
 


  doRefresh(event) {
    //console.log('Begin async operation');
    this.retrieval();
  
    setTimeout(() => {
      //console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
