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
  public formcontrol : FormGroup;
  isSubmitted = false;
  public data: Login = new Login();
  valid: boolean = false;
  errmsg: any;
  showMsg: any;
  formValid: any;
   server: any;
  constructor( public platform:Platform , public menuCtrl: MenuController,private popover:PopoverController,
     private loadingCtrl  : LoadingController,private fb: FormBuilder,
     private alertCtrl: AlertController,public alertservice:AlertService,
    public rest: RestService, private myRoute: Router,) {
  this.formcontrol = this.fb.group({
   
      number: ['', [Validators.required, (Validators.minLength(10)), (Validators.pattern(/^[6-9]\d{9}$/))]],
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
    this.login();
  }
  get errorControl() {
    return this.formcontrol.controls;
  }
 
  async showLoader(){
    const loading = this.loadingCtrl.create({
        message:'Please wait',
        spinner: 'crescent',
       duration: 500,
       mode:'ios'
      });
    (await loading).present();
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
  
  login(){
   
    this.isSubmitted = true;
    this.formcontrol.get("number").setValidators(Validators.required);
   this.formcontrol.get("number").updateValueAndValidity();
    if (!this.formcontrol.valid) {
      return false;
   }
   else{
    if (this.formcontrol.valid) 
   {
    Object.assign(this.data, this.formcontrol.value);
    console.log(this.data);
    this.rest.login(this.data).subscribe((result) => {
      if (result === undefined) {
        console.log(result);
        this.errmsg = true;
        this.alertservice.loginfailurealert();
       }
       else {
        this.showLoader();
        this.rest.sendToken(result.accessToken);
   
        this.myRoute.navigate(['dashboard/home']);
        this.formcontrol.reset();
       }
    }, (err) => {
      this.alertservice.loginfailurealert();
      console.log(err);
     
    });
   }
   else {
    this.valid = true;
    this.formcontrol.reset();
  }
  
}
  
  }
}

