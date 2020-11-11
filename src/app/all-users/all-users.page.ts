import { Component, OnInit } from '@angular/core';
import {RestService } from '../Service/rest.service';
import { Login } from '../Model/class';
import { MatTableDataSource } from '@angular/material/table';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.page.html',
  styleUrls: ['./all-users.page.scss'],
})
export class AllUsersPage implements OnInit {
  arr;
  value: any[];
  userid;
  listDatas;
  listData;
  isItemAvailable:boolean=false;
  isItemAvailables:boolean=false;

  public data: Login = new Login();
  displayedColumns: string[] = ['id','fullname','number','delete'];
  //listData: MatTableDataSource<any>;
  constructor(public rest: RestService,public toastController: ToastController) { }

  ngOnInit() {
    // this.isItemAvailable=true;
    // this.isItemAvailables=false;
     //this.retrieval();
     //this.getuserDetails();
  }
 
//   getItems(ev: any) {
//     this.listDatas=this.listData;
//  console.log(this.listData);
//   const val = ev.target.value.toLowerCase();
//   if (val && val.trim() != ''){
//     this.isItemAvailables = true;
//     this.isItemAvailable = false;
//   this.listDatas= this.listData.filter((item => {
//       return (item.fullname.toLowerCase().indexOf(val.toLowerCase()) > -1);
//       }
//       )
//     )

//   }
//   else{
//      this.isItemAvailable=true;
//      this.isItemAvailables=false;
//     console.log("jdfhj");
//   }
// }
// doRefresh(event) {
//   console.log('Begin async operation');
//   this.retrieval();
//      //this.getuserDetails();
//   setTimeout(() => {
//     console.log('Async operation has ended');
//     event.target.complete();
//   }, 2000);
// }
//   async presentToast() {
//     const toast = await this.toastController.create({
//       message: "User removed Successfully",
//       cssClass: "toast-scheme ",
//      position: 'top',
//       duration: 3000
//     });
//     toast.present();
//   }


//   retrieval() { 
//     this.rest.getuserlist().subscribe((result) => {
//       if (result === undefined) {
//         console.log(result);
//       }
//       else {
//         this.arr = Object.entries(result).map(([type, value]) => ({ type, value }));
//         this.listData = this.arr[0].value;
//         this.listData = new MatTableDataSource(this.arr[1].value);
//       }
//     }, (err) => {
//       console.log(err);
//     });
//   }

  // getuserDetails() {
  //   this.rest.userprofile().subscribe((result) => {
  //     if (result === undefined) {
  //       console.log(result);
       
  //     }
  //     else {
  //       this.arr = Object.entries(result).map(([type, value]) => ({ type, value }));
  //       this.userid = this.arr[0].value;
  //       // console.log(this.userid);
      
       
  //     }
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }

  // delete(id) {
  //   this.rest.removefromlist(id).subscribe((result) => {
  //     console.log(result);
  //     if (result == undefined) {
  //       console.log(result);
  //     }
  //     else { 
  //     //this.getuserDetails();
  //     this.retrieval();
  //       //console.log(result);
  //       this.presentToast();
  //     }
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }

}
