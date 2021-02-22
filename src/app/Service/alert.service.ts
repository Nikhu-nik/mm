import { Injectable } from '@angular/core';
import { AlertController} from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AlertService {
alert;
  constructor(public alertController: AlertController,public loadingController: LoadingController
    , private myRoute: Router,) { }

// REgister ALert
async succesalert(){


const alert = await this.alertController.create({
      cssClass: 'sucess-alert',
      message: 'Registered Succesfully',
      
      buttons: [
        {
          text: 'proceed to login',
          handler: (blah) => {
            this.myRoute.navigate(['/login']);
          }
        }
      ]
    });
    await alert.present();
  }

  async productpostedsucccessfully(){
    const alert = await this.alertController.create({
      cssClass: 'ds',
    
     message: 'Product posted sucessfully',
      buttons: ['OK']
    });
    await alert.present();
  }
  async productsuccesload(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 1000
    });
    await loading.present();

 
  }
  async failurealert(){
    const alert = await this.alertController.create({
          cssClass: 'login-alert',
          subHeader: 'Something went wromg !',
         message: 'Signup Failed',
          buttons: ['OK']
        });
        await alert.present();
      }


      // Login ALert
       async loginfailurealert() {
        const alert = await this.alertController.create({
          cssClass: 'login-failure',
          mode:'ios',
         
          header: 'Failed',
          message: 'please register',
          buttons: ['OK']
        });
        await alert.present(); 
      }
      async loginsuccesalert(){
        const alert = await this.alertController.create({
          cssClass: 'login-alert',
         message: 'LoggedIn Succesfull',
          buttons: ['OK']
        });
        await alert.present(); 
      }
    //Profile Update

    async profileupdatedalert(){
      const alert = await this.alertController.create({
            cssClass: 'my-profile-class',
            header: 'Profile',
            mode:'ios',
           message: 'Updated Successfully!',
            buttons: ['OK']
          });
          await alert.present();
        }
}
