import { Component, OnInit,ViewChild } from '@angular/core';
import { RestService } from '../Service/rest.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-prod-del',
  templateUrl: './prod-del.page.html',
  styleUrls: ['./prod-del.page.scss'],
})
export class ProdDelPage implements OnInit {


 temp = [];
  arr =[];
  userid;
  listDatas;
  photo;
  tableStyle = 'bootstrap';
  isItemAvailables:boolean=true;
  isItemAvailable:boolean=true;
  show = false;
  listData;
 //listData: MatTableDataSource<any>;
  displayedColumns: string[] = [ 'id', 'userId' ,'productfullname', 'productphone','city','delete'];
  content: any;
  constructor(public rest: RestService,public toastController: ToastController) { }

  ngOnInit() {
    this.retrieval();
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
  async presentToast() {
    const toast = await this.toastController.create({
      message: "Product removed Successfully",
      cssClass: "toast-scheme ",
     position: 'top',
      duration: 3000
    });
    toast.present();
  }

  delete(id) {
    this.rest.deleteProduct(id).subscribe((result) => {
      if (result == undefined) {
        console.log(result);
      }
      else {
      this.getuserDetails();
      this.retrieval();
        //console.log(result);
        this.presentToast();
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
