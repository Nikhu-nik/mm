import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Geolocation, Geoposition, GeolocationOptions } from '@ionic-native/geolocation/ngx';
import { ActionSheetController, AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestService } from '../Service/rest.service';
import { PostAdd } from '../Model/class';
import { Router } from '@angular/router';
declare var google;
@Component({
  selector: 'app-postadvert',
  templateUrl: './postadvert.page.html',
  styleUrls: ['./postadvert.page.scss'],
})
export class PostadvertPage implements OnInit {
  valid: boolean = false;
  isSubmitted = false;
  public postadvertForm: FormGroup;
  countryList;
  categoryList = [
    { categorytype: "Vegatebles" },
    { categorytype: "Fruits" }

  ]
  country: string;
  address: string;       // Users Address
  latitude: number;     //Users latitiude
  longitude: number;  //Users longitiude 
  today = Date.now();  //Date Todays
  image;
  currentNumber = 1;
  base64Image: string;
  images: any[] = [];
  public data: PostAdd = new PostAdd();
  constructor(private httpClient: HttpClient,
    private fb: FormBuilder, private loadingCtrl: LoadingController,
    private geolocation: Geolocation, public router: Router,
    private camera: Camera, public toastController: ToastController,
    public rest: RestService, private alertController: AlertController,
    private actionSheetCtrl: ActionSheetController) {
    this.postadvertForm = this.fb.group({
      advname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      advprice: ['', [Validators.required, (Validators.minLength(10), (Validators.pattern(/^[0-9]\d{9}$/)))]],
      advquant: ['', [Validators.required, (Validators.minLength(10))]],
      advdesc: ['', Validators.required],
      advcity: ['', Validators.required],
      advcategory: ['', Validators.required],
      advfullname: ['', Validators.required],
      advphone: ['', [Validators.required, (Validators.maxLength(10)), (Validators.pattern(/^[6-9]\d{9}$/))]],
      advimage: ['', [Validators.required]],
      userId: this.rest.getId(),

      roles: this.fb.array(['USER'])
    });
  }

  ngOnInit() {
    this.latlong();
    this.httpClient.get<any>('https://restcountries.eu/rest/v2/all')
      .subscribe((res) => {
        this.countryList = res;
      });
  }

  //helps in triggers an error in validation
  get errorControl() {
    return this.postadvertForm.controls;
  }
  getaddress() {
    let geocoder = new google.maps.Geocoder;
    let address = "";
    let ref = this;
    var latlng = { lat: this.latitude, lng: this.longitude };
    geocoder.geocode({ 'location': latlng }, function (results, status) {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[5]) {
          address = results[5].formatted_address;
          ref.address = address;
        }

      }

    });
  }

  //Longitude and latitude 
  latlong() {
    let options: GeolocationOptions = {
      enableHighAccuracy: true
    }
    this.geolocation.watchPosition(options).subscribe((resp: Geoposition) => {

      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      console.log(this.latitude);
      console.log(this.longitude);
      this.getaddress();
    }, (err) => {
      alert(JSON.stringify(err));
      console.log('Error getting location', err);
    })
  }

  async selectImage(key) {
    const actionSheet = await this.actionSheetCtrl.create({
      mode: 'md',
      cssClass: 'my-action-class',
      header: 'Select Image source',
      buttons: [{
        icon: "camera",
        text: 'Camera',
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA, key);
        }
      },
      {
        text: 'Load from Gallery',
        icon: "folder",
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY, key);
        }
      },
      {
        icon: "close",
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }



  pickImage(sourceType, key) {

    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.image = 'data:image/jpeg;base64,' + imageData;
      // alert(this.image);
      this.images.push(this.image);

      // this.upload(this.base64Image);
    }, (err) => {
      alert('error' + JSON.stringify(err));
    });
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

  async showtoast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 4000,

    });
    toast.present();
  }
  postadvertisement() {
      if(this.images.length < 2){
      this.showtoast('Please select minimum 2 images to proceed');
       return true;
    }
    this.isSubmitted = true;
    if (!this.postadvertForm.invalid) {
      return false;
    }
    this.loadingCtrl.create({
      message: "Please wait....",
      mode: 'ios',
      cssClass: 'register-loader',
      duration: 5000,
      spinner: 'crescent',
    }).then((ele) => {
      ele.present();
      this.data["filename"] = undefined;
      console.log(this.data["filename"]);
      for (var k = 0; k < this.images.length; k++) {
        if (this.data["filename"] == undefined) {
          this.data["filename"] = "user-products/" + Date.now().toString() + k.toString() + ".png";
        } else {
          this.data["filename"] += ",user-products/" + Date.now().toString() + k.toString() + ".png";
        }
      }
      for (var i = 0; i < this.images.length; i++) {
        if (this.postadvertForm.valid) {
          alert('Form values are passed');
        }
      else {
                 console.log('Form is Valid')
                    this.valid = true;
                 }
          Object.assign(this.data, this.postadvertForm.value);
          console.log(this.images);
          this.data["advimgbase"] = this.images[i];
          this.data["advlocation"] = this.address;
          this.data["advcountry"] = this.country;
          this.data["count"] = i.toString()
          console.log(this.data);
         // if(this.postadvertForm.valid) {
          this.rest.postadvertisement(this.data).subscribe((result) => {
            console.log(result);
            if (result === undefined) {
              console.log(result);
            }
            else {
              this.showAlert('Product posted Successfully');
            }
            ele.dismiss()
            this.router.navigate(['dashboard/home']);
          }, (err) => {
            alert(JSON.stringify(err));
          });
        //}
      }

    })



  }

  //   postadvertisement(){
  //     // if(this.images.length < 2)
  //     // {
  //     // this.showtoast('Please select minimum 2 images to proceed');
  //     // return true;
  //     // }
  //     this.isSubmitted = true;
  //     if (!this.postadvertForm.valid) {
  //       return false;
  //     } 
  //     this.data["filename"] = undefined;
  //     console.log(this.data["filename"]);
  //     for(var k = 0;k<this.images.length;k++) {
  //       if(this.data["filename"] == undefined){
  //         this.data["filename"] =  "user-products/"+ Date.now().toString() +k.toString()+ ".png";
  //       }
  //       else{
  //       this.data["filename"] +=  ",user-products/"+ Date.now().toString()+k.toString()+ ".png";
  //       }
  //       }
  //      for(var i = 0;i<this.images.length;i++)
  //       {
  // if (this.postadvertForm.valid) {
  //      alert('Form values are passed');
  //       }
  //   else {
  //      console.log('Form is Valid')
  //         this.valid = true;
  //      }
  //     Object.assign(this.data, this.postadvertForm.value);
  //     console.log(this.images);
  //     this.data["advimgbase"] = this.images[i];
  //     this.data["advlocation"] = this.address;
  //     this.data["advcountry"] = this.country;
  //     this.data["count"] = i.toString()

  //     console.log(this.data);

  //     //if (this.formcontrol.valid) {
  //      // alert(i);

  //     this.rest.postadvertisement(this.data).subscribe((result) => {

  //        console.log(result);
  //       if (result === undefined) {
  //           console.log(result);
  //          }
  //         else {
  //       //this.alertservice.productpostedsucccessfully();

  //       }
  //       //this.router.navigate(['dashboard/home']);
  //       }, (err) => {
  //         alert(JSON.stringify(err)); 
  //       });
  //     }
  // }
}
