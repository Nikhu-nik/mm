import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { RestService } from '../Service/rest.service';
import { Router } from '@angular/router';
import {  AlertController,ModalController } from '@ionic/angular';
import {Forgot} from '../Model/class';
import { LoadingController, Platform } from '@ionic/angular';
import {MenuController} from '@ionic/angular';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  public formcontrol : FormGroup;
  public formValid = true;
  showMsg: boolean = false;
  flag: any;
  errmsg: any;
  public data: Forgot = new Forgot();
   valid: boolean = false;
  user: boolean = false;
  constructor(public menuCtrl: MenuController,public fb: FormBuilder,public loadingController: LoadingController,
    private alertCtrl: AlertController,public rest: RestService, private myRoute: Router,private modalCtrl:ModalController) { 
      // this.formcontrol = this.fb.group({
      //   fullname: ["", [Validators.required]]
      //  });
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }

  ngOnInit() {
    this.valid=false;
    this.errmsg=false;
  }

  async createLoader(){
    let loading = await this.loadingController.create({
      message:"Updating New Password",
      duration:2000,
      showBackdrop:false,
      spinner:"lines-small"
      });
      loading.present();
      setTimeout(()=>{
        loading.dismiss();
      },2000)
      //this.myRoute.navigate(["/login"]);
  }

  reset() {
    Object.assign(this.data, this.formcontrol.value);
    console.log(this.data);
    this.formcontrol.get("fullname").setValidators(Validators.required);
    this.formcontrol.get("fullname").updateValueAndValidity();
    // this.formcontrol.get("number").setValidators(Validators.required);
    // this.formcontrol.get("number").updateValueAndValidity();
 
 
    if (this.formcontrol.valid) {
      this.rest.forgot(this.data).subscribe((result) => {
        if (result == undefined) {
          console.log(result)
          this.user = true;
        }
        else {
          this.createLoader();
          this.formcontrol.reset();
        }
      }, (err) => {
        this.user = true;
        console.log(err);
      });
    }
    else {
      this.valid = true;
    }
  }

//   updatepass(){
 
//      this.formcontrol.get("fullname").setValidators(Validators.required);
//     this.formcontrol.get("fullname").updateValueAndValidity();
//     Object.assign(this.data, this.formcontrol.value);
//       console.log(this.data);
  
//      if (this.formcontrol.valid) {
//         this.rest.forgot(this.data).subscribe((result) => {   
//          if(result === undefined)
//             {
//               console.log(result);
//               this.errmsg=true;
            
//             }
            
//            else
//             {
//               this.formcontrol.reset();
//               this.formcontrol = this.fb.group({
//                 fullname: ["", [Validators.required]],
//                // number: ["", [Validators.required]],
//                  roles: this.fb.array(['USER']),
//                      });
//               this.createLoader();
//               this.myRoute.navigate(['/login']);
//             }
            
//           }, (err) => {
//            // err.status(200).send("Error -> " + err);
//           // this.server=true;
            
//             console.log(err);
          
//           });
//         }
//         else{
//           this.valid=true;
//         }

// }
}