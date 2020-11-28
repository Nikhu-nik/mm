import { Component } from '@angular/core';

import { ModalController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Register} from './Model/class';
import { RestService } from './Service/rest.service';
import { Router } from '@angular/router';
import { LoginPage } from './login/login.page';
//import { Network } from '@ionic-native/network/ngx';
//import { Dialogs } from '@ionic-native/dialogs/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public defaultimageshow: string = '../../assets/icon/user-avatar.png';
  public UserMenuItems = [
    {
      title: 'Home',
      icon: 'home',
      url:'/dashboard/home'
    },
    {
      title: 'Post Advertisement',
      icon: 'document',
      url:'/addpro'
    },
    {
      title: 'Buy Package',
      icon: 'pricetag'
      
    },
   
   
   
    {
      title: 'Support',
      icon:'call',
      children  :[
        {
          title: 'Help Center',
          icon: 'call'
          
        },
        {
          title: 'Rate us',
          icon: 'person'
         
        },
        {
          title: 'Invite friends',
          icon: 'person'
        
        },
      ]
    },
    {
      title: 'Privacy',
      icon:'shield-checkmark',
      children  :[
        {
          title: 'Version',
          icon: 'shield-checkmark'
          
        },
        {
          title: 'Deactivate',
          icon: 'person'
        
        },
        {
          title: 'Become a Partner',
          icon: 'hand-left',
          url:'/partner'
        },
      ]
    },
    
    
    ];
public AdminMenuItems = [
  {
    title: 'Dashboard',
    icon: 'home',
    url:'/admindashboard'
  },
  
  {
    title: 'View Users',
    icon: 'eye',
    url:'/all-users'
  },
  {
    title: 'Add Product',
    icon: 'basket',
    url:'/addpro'
  },
  {
    title: 'All Advertisement',
    icon: 'pricetags',
    url:'/product-list'
  },
  {
    title: 'Delete Product',
    icon: 'trash',
    url:'/prod-del'
  },
 
  {
    title: 'Dark/Light',
    icon: 'bulb'
    
  }
  
];
  profilePhoto;
  rootPage:any = LoginPage;
  name;
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
    private modalController:ModalController
  ) {
//     this.network.onDisconnect().subscribe(() => 
//     {
//       this.dialogs.alert('Please Connect your Internet')

//     });
//     this.network.onConnect().subscribe(() => {
// setTimeout(() =>
//  {
//   this.dialogs.alert('Connected to '+this.network.type+' connection');
// }, 2000);
//     });
    platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#44cc7d');
 
     
      });
     
    
   
    this.initializeApp();
  }

  initializeApp() {
   
    this.platform.ready().then(() => {
      // if (window.location.pathname === "/"){
      //   this.route.navigateByUrl('postad');
      // }
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    this.navi();
    this.getuserprofiles();
  }
  doRefresh(event) {
    this.getuserprofiles();
    console.log('Begin async operation');
        setTimeout(() => {
          console.log('Async operation has ended');
          event.target.complete();
        }, 2000);
      }
 navi(){
  if(this.rest.getRole()=="ADMIN"){
    this.route.navigate(['/admindashboard']);
  }
  else if(this.rest.getRole()=="USER"){
    this.route.navigate(['/dashboard/home']);
  }
  else{
    // this.route.navigate(['/login']);
    console.log('Bad Request');
  }
}




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
