import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController,PopoverController } from '@ionic/angular';
import { RestService } from '../Service/rest.service';
import {Login} from '../Model/class';
import { LoadingController,Platform  } from '@ionic/angular';
import {MenuController} from '@ionic/angular';
import {AlertService} from '../Service/alert.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm : FormGroup;
  isSubmitted = false;
  public data: Login = new Login();
  valid: boolean = false;
  errmsg: any;
  showMsg: any;
  formValid: any;
   server: any;
  constructor(public modalCtrl: ModalController, public platform:Platform ,
     public menuCtrl: MenuController,private popover:PopoverController,
     private loadingCtrl  : LoadingController,private fb: FormBuilder,
     private alertController: AlertController,public alertservice:AlertService,
    public rest: RestService, private myRoute: Router,) {
  this.loginForm = this.fb.group({
  number: ['', [Validators.required,
     (Validators.minLength(10)), (Validators.pattern(/^[6-9]\d{9}$/))]],
    });
    this.platform.backButton.subscribe(async () => {
      if (this.myRoute.isActive('/login', true) && this.myRoute.url === '/login') {
        navigator['app'].exitApp();
      }
    });
   }
   ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }

  ngOnInit() {
    this.navi();
    this.loggedin();
    
  }
  get errorControl() {
    return this.loginForm.controls;
  }
 

  
  navi(){
    if(this.rest.getRole()=="ADMIN"){
      this.myRoute.navigate(['/admindashboard']);
    }
    else if(this.rest.getRole()=="USER"){
      this.myRoute.navigate(['dashboard/home']);
    }
    else{
      this.myRoute.navigate(['/login']);
    }
  }
 async dismiss(){
   return await this.modalCtrl.dismiss();
 }
 async showAlert(message) {
  const alert = await this.alertController.create({
    mode: 'ios',
    message: message,
  });
  await alert.present();
  setTimeout(() => {
    alert.dismiss();
  }, 5000);
}


loggedin(){
  this.isSubmitted = true;
  if (!this.loginForm.valid) {
  return false;
}else{
  if (this.loginForm.valid) 
  {
    this.loadingCtrl.create({
      message:"SigningIn....",
      mode:'ios',
      cssClass:'register-loader',
      duration: 5000,
      spinner: 'crescent',
    }).then((ele)=>{
      ele.present();
      Object.assign(this.data, this.loginForm.value);
      console.log(this.data);
      this.rest.login(this.data).subscribe((result)=>{
        if (result === undefined) {
          console.log(result);
          this.errmsg = true;
          this.alertservice.loginfailurealert();
         } else{
          this.rest.sendToken(result.accessToken);
          ele.dismiss();
          this.myRoute.navigate(['dashboard/home']);
          }
      }, (err)=>{
        this.alertservice.loginfailurealert();
      console.log(err);
      });
    })
  }
}






}



//   sss(){
//     this.isSubmitted = true;
  
// if (!this.loginForm.valid) {
//       return false;
//    }
//    else{
//     if (this.loginForm.valid) 
//    {
//     Object.assign(this.data, this.loginForm.value);
//     console.log(this.data);
//     this.rest.login(this.data).subscribe((result) => {
//       if (result === undefined) {
//         console.log(result);
//         this.errmsg = true;
//         this.alertservice.loginfailurealert();
//        }
//        else {
      
//         this.rest.sendToken(result.accessToken);
   
//         this.myRoute.navigate(['dashboard/home']);
//         this.loginForm.reset();
//        }
//     }, (err) => {
//       this.alertservice.loginfailurealert();
//       console.log(err);
     
//     });
//    }
//    else {
//     this.valid = true;
//     this.loginForm.reset();
//   }
  
// }
  
//   }
}

