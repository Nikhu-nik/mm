import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { RestService } from '../Service/rest.service';
import { Router } from '@angular/router';
import { AlertController, ModalController, LoadingController,PopoverController } from '@ionic/angular';
import { Register } from '../Model/class';
import { NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import {AlertService} from '../Service/alert.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public formcontrol: FormGroup;
  public formValid = true;
  isSubmitted = false;
  showMsg: boolean = false;
  valid: boolean;
  flag: any;
  load: HTMLIonLoadingElement = null;
  selectedFile: FileList;
  currentFileUpload: File;
  errmsg: any;
  public data: Register = new Register();
 
  constructor(private platform: Platform, public menuCtrl: MenuController,
     private popover: PopoverController, private navCtrl: NavController, 
     public fb: FormBuilder, private loadingCtrl: LoadingController,public alertservice:AlertService,
    private alertController: AlertController, public rest: RestService,
     private myRoute: Router, private modalCtrl: ModalController) {
    this.formcontrol = this.fb.group({
      fullname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'),
       (Validators.maxLength(20)), (Validators.minLength(5))]],
      number: ['', [Validators.required, (Validators.minLength(10)), (Validators.pattern(/^[6-9]\d{9}$/))]],
      roles: this.fb.array(['USER'])
    });
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  //helps in triggers an error in validation
  get errorControl() {
    return this.formcontrol.controls;
  }

 
  async showLoader(){
  const loading = this.loadingCtrl.create({
      message:'Please wait',
      spinner: 'crescent',
      cssClass:'register-loader',
      duration: 500,
      mode:'ios'
     
    });
  (await loading).present();

}

  ngOnInit() {
    this.valid = false;
    this.errmsg = false;
    this.isSubmitted = false;
  }
 
 
   getregister() {
    this.showLoader();
   this.isSubmitted = true;
    if (!this.formcontrol.valid) {
       return false;
    } 
     else {
      if (this.formcontrol.valid) 
      {
       
      Object.assign(this.data, this.formcontrol.value);
      console.log(this.data);
      this.rest.Register(this.data).subscribe(async (result) => {
       if (result === undefined) {
            console.log(result);
            this.errmsg = true;
          
           } else {
            this.alertservice.succesalert();
            };
        }, (err) => {
        console.log(err);
        this.alertservice.failurealert();
        });
        } 
        else {
        this.valid = true;
        this.formcontrol.reset();
      }
    }
 }
 
}
