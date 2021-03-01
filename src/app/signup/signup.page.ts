import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../Service/rest.service';
import { Router } from '@angular/router';
import { AlertController, ModalController, LoadingController,
  PopoverController, MenuController, Platform, ToastController } from '@ionic/angular';
import { Register } from '../Model/class';
import { AlertService } from '../Service/alert.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public registerForm: FormGroup;
  public formValid = true;
  isSubmitted = false;
  valid: boolean= false;
 public data: Register = new Register();



  constructor(private platform: Platform, public menuCtrl: MenuController,
    private popover: PopoverController,public toastController: ToastController,
    public fb: FormBuilder, private loadingCtrl: LoadingController,public alertservice:AlertService,
   private alertController: AlertController, public rest: RestService,
    private myRoute: Router, private modalCtrl: ModalController) {
   this.registerForm = this.fb.group({
     fullname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*') ]],
     number: ['', [Validators.required, (Validators.minLength(10)), (Validators.pattern(/^[6-9]\d{9}$/))]],
     roles: this.fb.array(['USER'])
   });
 }  

 ionViewWillEnter() {
  this.menuCtrl.enable(false);
}

//helps in triggers an error in validation
get errorControl() {
  return this.registerForm.controls;
}




ngOnInit() {
  this.valid = false;
 this.isSubmitted = false;
}



isInputNumber(event: any) {
  const ch = String.fromCharCode(event.which);
  if (!(/[0-9]/.test(ch))) {
    event.preventDefault();
  }
}

getregister(){
  this.isSubmitted = true;
  if (this.registerForm.invalid) {
    return false;
  } 
this.loadingCtrl.create({
  message:"Signingin...",
  mode:'ios',
  cssClass:'register-loader',
  duration: 4000,
  spinner: 'crescent',
}).then((ele)=>{
  ele.present();  
  Object.assign(this.data, this.registerForm.value);
  console.log(this.data);
  this.rest.Register(this.data).subscribe((result)=>{
  console.log(result);
  this.showAlert('Registered Successfully...');
  ele.dismiss();
  this.myRoute.navigate(['/login']);
  },(error)=>{
    if(error.status==400){
      this.showtoast('This mobile number has already been registered');
      console.log(error);
    }else{
      if(error.status==0){
        this.showtoast('Server is low, Please try again later');
        console.log(error);
        //this.registerForm.reset();  
      }
    }
  })
})



}

async showtoast(message) {
  const toast = await this.toastController.create({
    message: message,
    duration: 4000,
   position:'top'
  });
  toast.present();
}



async showAlert(message) {
  const alert = await this.alertController.create({
   // mode: 'ios',
    message: message,
    buttons: ['OK']
  });
  await alert.present();
 
}


}
