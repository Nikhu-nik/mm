import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Camera, CameraOptions, DestinationType } from '@ionic-native/camera/ngx';
import { PostAdd } from '../Model/class';
import { RestService } from '../Service/rest.service';
import { AlertController } from '@ionic/angular';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ImagePicker, ImagePickerOptions } from "@ionic-native/image-picker/ngx";
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { IonContent } from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/File/ngx';
import {NavController} from '@ionic/angular';
import { Base64 } from '@ionic-native/base64/ngx';
import {AlertService} from '../Service/alert.service';
import { Router } from '@angular/router';
import { Geolocation, Geoposition ,GeolocationOptions } from '@ionic-native/geolocation/ngx';
declare var google;
@Component({
  selector: 'app-postad',
  templateUrl: './postad.page.html',
  styleUrls: ['./postad.page.scss'],
})
export class PostadPage implements OnInit {
  @ViewChild(IonContent, { static: true }) content: IonContent;
 advimgbase;
  public formcontrol: FormGroup;
  public formValid = true;
  isSubmitted = false;
  today = Date.now();
  demo: any = {};
  public data: PostAdd = new PostAdd();
  pickerimages: any = [];
  offsetTop: 0;
  scrollToTop = 'smooth';
  progress: { percentage: number } = { percentage: 0 };
  selectedFiles: FileList;
  currentFileUpload: File;
  valid: boolean = false;
  address: string;       // Users Address
  latitude: number;     //Users latitiude
  longitude: number;  //Users longitiude
  base64temp:string="";
  images:string[]=[];
  challengeProvider: any;
  constructor(private fb: FormBuilder,
   private navCtrl:NavController,public file:File,
    private route: ActivatedRoute,private router:Router,
    public rest: RestService,public alertservice:AlertService,
    private picker: ImagePicker, private geolocation:Geolocation,
    private camera: Camera,public base64: Base64,
    private alertController: AlertController
  ) {
   
    this.formcontrol = this.fb.group({
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

  //helps in triggers an error in validation
  get errorControl() {
    return this.formcontrol.controls;
  }


  ngOnInit() {
    this.latlong();
  }
  getaddress()
     {
      let geocoder = new google.maps.Geocoder;
      let address = "";
      let ref = this;
     var latlng = { lat:this.latitude, lng:this.longitude };
     geocoder.geocode({ 'location': latlng }, function (results, status) {
          console.log(results);
          console.log(status);
    if (status === 'OK') {
            if (results[0]) {
              address = results[0].formatted_address;
              ref.address = address;
            }
            
          }
         
        });
      }
    
    //Longitude and latitude 
    latlong() {
      let options:GeolocationOptions={
    enableHighAccuracy:true
      }
      this.geolocation.watchPosition(options).subscribe((resp:Geoposition) => {
       
        this.latitude = resp.coords.latitude;
        this.longitude = resp.coords.longitude;
        console.log(this.latitude);
        console.log(this.longitude);
        this.getaddress();
        },(err)=>{
          alert(JSON.stringify(err));
         console.log('Error getting location', err);
      })  
    } 
  async successpost() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',

      message: 'Succesfully Posted',
      buttons: ['OK']
    });
    await alert.present();
  }
  failurepost() {
    console.log("failed to upload");
  }
  PickFile(){
    this.base64temp = 'data:image/jpeg;base64,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';
   
    alert(this.base64temp.length);
    this.images.push(this.base64temp);
    //this.fileChooser.open().then((val) => {
 //this.filePath.resolveNativePath(val).then((nativepath)=>{
     // var filename = nativepath.substring(nativepath.lastIndexOf('/')+1);
      //var folderpath = nativepath.substring(0,nativepath.lastIndexOf('/')+1);
 
   // this.file.readAsDataURL(folderpath,filename).then((str) => {
    // alert(str.length);
    // this.base64temp = str;
  alert(this.base64temp);
   
     
   //  }, (err) => {
   //   alert(JSON.stringify(err));
    //  });
     // },(err)=>{
  //   alert(JSON.stringify(err));
  //   });
  //  },
  // //  (err)=>{
  //     alert(JSON.stringify(err));
  //   });
  }

  // uploadmyadd() {
  //   this.isSubmitted = true;
  //   this.data["filename"] = undefined;
  //   console.log(this.data["filename"]);
  //   for(var k = 0;k<this.images.length;k++)
  //   {
  //    if(this.data["filename"] == undefined){
  //     this.data["filename"] =  "user-products/"+ Date.now().toString() +k.toString()+ ".png";
  //     }
  //     else{
  //       this.data["filename"] += 
  //        ",user-products/"+ Date.now().toString()+k.toString()+ ".png";
  //     }
  //   }
  //   for(var i = 0;i<this.images.length;i++)
  //   {
  //   this.formcontrol.get("advname").setValidators(Validators.required);
  //   this.formcontrol.get("advname").updateValueAndValidity();
  //   this.formcontrol.get("advprice").setValidators(Validators.required);
  //   this.formcontrol.get("advprice").updateValueAndValidity();
  //   this.formcontrol.get("advdesc").setValidators(Validators.required);
  //   this.formcontrol.get("advdesc").updateValueAndValidity();
  //   this.formcontrol.get("advquant").setValidators(Validators.required);
  //   this.formcontrol.get("advquant").updateValueAndValidity();
  //   this.formcontrol.get("advfullname").setValidators(Validators.required);
  //   this.formcontrol.get("advfullname").updateValueAndValidity();
  //   this.formcontrol.get("advphone").setValidators(Validators.required);
  //   this.formcontrol.get("advphone").updateValueAndValidity();
  //   this.formcontrol.get("advcategory").setValidators(Validators.required);
  //   this.formcontrol.get("advcategory").updateValueAndValidity();
  //   this.formcontrol.get("advcity").setValidators(Validators.required);
  //   this.formcontrol.get("advcity").updateValueAndValidity();
  //   if (this.formcontrol.valid) {
  //     alert('Form values are passed');
  //     }
  //     else {
  //      console.log('Form Valid')
  //       this.valid = true;
  //       }
  //   Object.assign(this.data, this.formcontrol.value);
  //   console.log(this.images);
  //   this.data["advimgbase"] = this.images[i];
  //   this.data["location"] = this.address;
  //   this.data["count"] = i.toString()
  //   console.log(this.data);
  //   //if (this.formcontrol.valid) {
  // this.rest.postadvertisement(this.data).subscribe((result) => {
  //       console.log(result);
  //       if (result === undefined) {
  //         console.log(result);
  //       }
  //       else {
  //         this.alertservice.productpostedsucccessfully();
         
  //       }
  //       this.router.navigate(['dashboard/home']);
  //     }, (err) => {
  //       alert(JSON.stringify(err)); 
  //     });
  //   }
  //   }

    add(){
      this.isSubmitted = true;
    this.data["filename"] = undefined;
      console.log(this.data["filename"]);
      for(var k = 0;k<this.images.length;k++)
      {
      if(this.data["filename"] == undefined){
        this.data["filename"] =  "user-products/"+ Date.now().toString() +k.toString()+ ".png";
      }
      else{
        this.data["filename"] +=  ",user-products/"+ Date.now().toString()+k.toString()+ ".png";
      }
      }
     for(var i = 0;i<this.images.length;i++)
      {
        this.formcontrol.get("advname").setValidators(Validators.required);
          this.formcontrol.get("advname").updateValueAndValidity();
          this.formcontrol.get("advprice").setValidators(Validators.required);
          this.formcontrol.get("advprice").updateValueAndValidity();
          this.formcontrol.get("advdesc").setValidators(Validators.required);
          this.formcontrol.get("advdesc").updateValueAndValidity();
          this.formcontrol.get("advquant").setValidators(Validators.required);
          this.formcontrol.get("advquant").updateValueAndValidity();
          this.formcontrol.get("advfullname").setValidators(Validators.required);
          this.formcontrol.get("advfullname").updateValueAndValidity();
          this.formcontrol.get("advphone").setValidators(Validators.required);
          this.formcontrol.get("advphone").updateValueAndValidity();
          this.formcontrol.get("advcategory").setValidators(Validators.required);
          this.formcontrol.get("advcategory").updateValueAndValidity();
          this.formcontrol.get("advcity").setValidators(Validators.required);
          this.formcontrol.get("advcity").updateValueAndValidity();
     if (this.formcontrol.valid) {
      alert('Form values are passed');
      }
    
      else {
      
      console.log('Form Valid')
        this.valid = true;
      }
    Object.assign(this.data, this.formcontrol.value);
    console.log(this.images);
    this.data["advimgbase"] = this.images[i];
    this.data["location"] = this.address;
    this.data["count"] = i.toString()
    
    console.log(this.data);
    
    //if (this.formcontrol.valid) {
     // alert(i);
   
    this.rest.postadvertisement(this.data).subscribe((result) => {
      
       console.log(result);
      if (result === undefined) {
          console.log(result);
         }
        else {
      this.alertservice.productpostedsucccessfully();
     
      }
      this.router.navigate(['dashboard/home']);
      }, (err) => {
        alert(JSON.stringify(err)); 
      });
    }
    }


  
//   remove(i) {
//     if (window.confirm("do you want to delete?")) {
//       this.pickerimages.splice(i, 1);
//     }
//   }
//   async cameraremove(i){
//   const alert = this.alertController.create({
//     message:'Do you want to remove',
//     buttons: ['ok']
    
//   });
  
//   (await alert).present();
//   this.advimage.splice(i,1);
// }

PickfromGallery(){
  let options: ImagePickerOptions = {
    maximumImagesCount: 5,
    outputType: 1
  }
  this.picker.getPictures(options).then((arr) => {
    for (var i = 0; i < arr.length; i++) {
      this.images.push("data:image/png;base64," + arr[i]);
    }

  }, (err) => {
    alert(JSON.stringify(err));
  })
}

  PickfromCamera(){
    var options: CameraOptions = {
      quality:100,
      mediaType:this.camera.MediaType.PICTURE,
      destinationType:this.camera.DestinationType.FILE_URI,
      encodingType:this.camera.EncodingType.JPEG
    }
    this.camera.getPicture(options).then((imagedata) => {
     
      let filename = imagedata.substring(imagedata.lastIndexOf('/')+1);
      let path = imagedata.substring(0,imagedata.lastIndexOf('/')+1);
      this.file.readAsDataURL(path,filename).then((base64data) => {
        this.images.push(base64data);
      })
    })
  }

  

  
  }
