import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { ModalController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Register} from './Model/class';
import { RestService } from './Service/rest.service';
import { Router } from '@angular/router';
import { LoginPage } from './login/login.page';
import {Subject} from 'rxjs';
//import { Network } from '@ionic-native/network/ngx';
//import { Dialogs } from '@ionic-native/dialogs/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  name = "Guest";
  public defaultimageshow: string = '../../assets/icon/user-avatar.png';
  profilePhoto;
  rootPage:any = LoginPage;
  //name;
  userid;
  arr;
  ar;
  role;
  shownGroup:any;
  errmsg: boolean;
  admin: boolean = false;
  user: boolean = false;
  public data: Register = new Register();
 
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private rest: RestService,
    private route: Router,
    private menu: MenuController,
    private _translate: TranslateService,
   private modalController:ModalController
  ) {
    this.initializeApp();
   
    platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#27ae60');
 });
     }
  menuclose(){
    this.menu.close();
  }
  initializeApp() {
   
    this.platform.ready().then(() => {
      if (window.location.pathname === "/"){
        this.route.navigateByUrl('welcomepage');
      }
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
 
  ngOnInit() {

    //this.navi();
    this.getuserprofiles();
  }

//  navi(){
//   if(this.rest.getRole()=="ADMIN"){
//     this.route.navigate(['/admindashboard']);
//   }
//   else if(this.rest.getRole()=="USER"){
//     this.route.navigate(['/dashboard/home']);
//   }
//   else{
//     // this.route.navigate(['/login']);
//     console.log('Bad Request');
//   }
// }




 getuserprofiles() {
  this.rest.userprofile().subscribe((result) => {
    if (result === undefined) {
      console.log(result);
      this.errmsg = true;
    }
    else {
      /* to get userdetails */
      this.arr = Object.entries(result).map(([type, value]) => ({ type, value }));
      this.userid = this.arr[1].value;
      this.name = this.userid.fullname;
      console.log(this.userid.name);
      this.profilePhoto = "http://ec2-18-141-56-81.ap-southeast-1.compute.amazonaws.com:4000/"
      +this.userid.profilephoto;
      this.rest.sendId(this.userid.id);
    
       /* to get role of user */

      this.ar = Object.entries(this.userid.roles).map(([type, value]) => ({ type, value }));
      this.role = this.ar[0].value;
       //console.log(this.role.name);
      this.rest.sendRole(this.role.name);
      /* Role Differntiation */
      if (this.rest.getRole() == "ADMIN") {
        this.admin=true;
       
      }
      else {
     
       this.user=true;
      }
    }   
  }, (err) => {
    console.log(err);

  });
}
  logout() {
  
    this.rest.logout();
    this.route.navigate(['/login']);
    this.admin = false;
    this.user = false;
  }
}
