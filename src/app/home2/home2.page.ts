import { Component, OnInit } from '@angular/core';
import {OneSignal} from '@ionic-native/onesignal/ngx';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {
 
  constructor(private alertCntrl:AlertController,private onesignal:OneSignal,
   ) { 
     
    }
    
  ngOnInit() {
   // this.signal();
  }










  

//   signal(){
// this.onesignal.startInit("digitaltech.com");
// this.onesignal.inFocusDisplaying(this.onesignal.OSInFocusDisplayOption.None);
// this.onesignal.handleNotificationReceived().subscribe(data => {
//   let msg = data.payload.body;
//   let title = data.payload.title;
//   this.shownotification(title,msg);
// })
// this.onesignal.handleNotificationOpened().subscribe(data => {
//   let msg = data.notification.payload.body;
//   let title = data.notification.payload.title;
//   this.shownotification(title,msg);

// })
// this.onesignal.endInit();
//   }


//   shownotification(title,msg){
//     this.alertCntrl.create({
// header:title,
// message:msg,
// buttons : [{
// text:"OK"
// }]
//     }).then((ele)=>{
//       ele.present();
//     })
//   }
  
}






  











