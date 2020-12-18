import { Component, OnInit, Input,ElementRef , ViewChild } from '@angular/core';
import { IonSlides} from '@ionic/angular';
import { AlertController,NavController, PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Observable, Subject, merge } from 'rxjs'
import { RestService } from '../Service/rest.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Register, Product, PostAdd } from '../Model/class';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Geolocation, Geoposition ,GeolocationOptions } from '@ionic-native/geolocation/ngx';
import { ModalController } from '@ionic/angular';
// import { style, state, animate, transition, trigger } from '@angular/animations';
import {NgZone} from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
// import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { EnquirePage } from '../enquire/enquire.page';
import { LangpopPage } from '../langpop/langpop.page';

declare var google;
 
@Component({
  selector: 'app-home',
 templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  langdata:any[]=[];
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  public categoryFullData: any;
  address: string;       // Users Address
  latitude: number;     //Users latitiude
  longitude: number;  //Users longitiude
  public product_name: string;
  public product_description: string;
  public product_location: string;
  public language: string;
  myphoto: any;
 imgbase;
 advimgbase;
  role;
  ar;
  cart;
  id;
  showFile = false;
  userid;
  items;
  public data: Register = new Register();
  arr;
  errmsg: boolean;
  fileUploads: Observable<string[]>;
  @Input() fileUpload: string;
  products: Product[] = [];
  postadds: PostAdd[] = [];
  isDisplay = false;
  show: boolean = false;
  map: any;
  states:any;
  isItemAvailable:boolean=false;
  isItemAvailables:boolean=false;
  selectedVal;
  
  languages=[
    {   
      "id":"1",
      "lngtype":"English"
    },
    {   
      "id":"2",
      "lngtype":"Hindi"
    },
    {   
      "id":"3",
      "lngtype":"Kannada"
    }
  ]
  group = [
    { 
     catimg : '../../assets/mic/herbs.png', 
      catname: 'HERBS'
   },
   { 
    catimg : '../../assets/mic/fruit (1).png', 
     catname: 'Fruits'
 },
 { 
  catimg : '../../assets/mic/harvest.png', 
   catname: 'VEGETABLES'
},
    { 
      catimg : '../../assets/mic/nut.png', 
      catname: 'NUTS'
},
    { 
      catimg : '../../assets/mic/coffee.png', 
      catname: 'COFFEE'
  },
  { 
    catimg : '../../assets/mic/flower (1).png', 
     catname: 'FLOWERS'
  },

    { 
   catimg : '../../assets/mic/vegan.png', 
      catname: 'VEGAN'
  },
    { 
     catimg : '../../assets/mic/edibleoil.png', 
      catname: 'OILS'
  },
    { 
     catimg : '../../assets/mic/soil.png', 
      catname: 'FETILIZERS'
  }
   ]
  public bannerFullData = [
    {
      id:'1',
      banner : '../../assets/mic/slide5.jpg', 
    },
    {
      id:'1',
      banner : '../../assets/mic/slide5.jpg', 
    },
    {
      id:'1',
      banner : '../../assets/mic/slide5.jpg', 
    },
    {
      id:'1',
      banner : '../../assets/mic/slide5.jpg', 
    },
    {
      id:'1',
      banner : '../../assets/mic/slide5.jpg', 
    },
    {
      id:'1',
      banner : '../../assets/mic/slide6.jpg', 
    },
    {
      id:'1',
      banner : '../../assets/mic/slide4.jpg', 
    },

  ]

  // toggleDisplay() {
  //   this.isDisplay = !this.isDisplay;
  // }
  slideOptions = {
    initialSlide: 1,
    speed: 400,
  };
  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }

 constructor(public modalController: ModalController, private call: CallNumber,
    public popoverCtrl: PopoverController,public navCtrl: NavController,
    private sanitizer: DomSanitizer,public zone: NgZone,public platform: Platform, 
    private test: AppComponent, 
    public rest: RestService,
     private myRoute: Router,private geolocation:Geolocation
    ) {
      this.platform.ready().then(() => {
})
      this.categoryFullData = [
        {
          id:1,
          catimg : '../../assets/mic/food.png', 
          catname: 'Vegetables'
        },

        {
          id:2,
          catimg : '../../assets/mic/food.png', 
          catname: 'Fruits'
        },
        {
          id:3,
          catimg : '../../assets/mic/food.png', 
          catname: 'Dry Fruits'
        }


      ]
  }
  async enquire() {
    const modal = await this.modalController.create({
      component: EnquirePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }


  ionViewDidEnter(){
    this.retrieval();
    this.adminpostedgetproduct();
    this.ret();
    this.userpostedgetproduct();
  }

  

  ngOnInit() {
   // this.getuserprofile();
   this.retrieval();
    this.ret();
    this.adminpostedgetproduct();
    this.latlong();
  
   
   }
  

   getItems(ev: any) {
  this.products=this.states;
  const val = ev.target.value.toLowerCase();
  if (val && val.trim() != ''){
    this.isItemAvailable=true;
    this.isItemAvailables=false;
   this.products= this.states.filter((l) => {
     if(this.products! = this.states)
  return(l.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
})
  }
else{
  this.isItemAvailables = true;
  this.isItemAvailable = false;
}
   }


  
  
  

// apprate(){
//   this.appRate.preferences.storeAppURL = {
//     android: 'market://details?id=<package_name>',
//   }
//   this.appRate.promptForRating(true);
// }


doRefresh(event) {
 this.retrieval();
  console.log('Begin async operation');
      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 2000);
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
       if (results[2]) {
          address = results[2].formatted_address;
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
  this.geolocation.getCurrentPosition(options).then((resp:Geoposition) => {
   
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
callnow(productphone){
 this.call.callNumber(productphone, true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));

}

//Mapping Products Posted by Admin
  adminpostedgetproduct() {
 this.rest.MapAdminProduct().subscribe((result) => {
     console.log(result);
    if (result == undefined) {
        console.log(result);
      }
      else { 
        console.log(result);
        this.arr = Object.entries(result).map(([type, value]) => ({ type, value }));
        this.states = this.arr[0].value;
}
    }, (err) => {
      console.log(err);
     
    });
  }
  
  //Mapping Products Posted by User
  userpostedgetproduct(){
 this.rest.MapUserProduct().subscribe((result) => {
  console.log(result);
  if(result == undefined) {
    console.log(result);
  }
  else{
    console.log(result);
    this.arr = Object.entries(result).map(([type, value]) => ({type , value }));
    this.states = this.arr[0].value;
  }
},(err) => {
  console.log(err);
});
  }

  retrieval() {
    this.rest.getproductOfAdmin().subscribe((Product) => {
     if (Product === undefined) {
        console.log(Product);
      }
      else {
        console.log(Product.product);
        this.products = Product.product;
        
      }
    }, (err) => {
      console.log(err);
    });
  }
ret(){
  this.rest.getproductOfUser().subscribe((PostAdd) => {
   if(PostAdd === undefined) {
      console.log(PostAdd);
    }
    else {
      console.log(PostAdd.postadd);
      this.postadds = PostAdd.postadd;
    }
  } , (err) => {
    console.log(err);
  })
}



  // getuserprofile() {
  //   this.rest.userprofile().subscribe((result) => {
  //     if (result === undefined) {
  //       console.log(result);
  //       this.errmsg = true;
  //     }
  //     else {
  //       /* to get userdetails */
  //       this.arr = Object.entries(result).map(([type, value]) => ({ type, value }));
  //       this.userid = this.arr[1].value;
  //    //   this.photo = this.userid.photo;
  //       this.rest.sendId(this.userid.id);
  //       //  console.log(this.userid.photo);
  //       /* to get role of user */
  //       this.ar = Object.entries(this.userid.roles).map(([type, value]) => ({ type, value }));
  //       this.role = this.ar[0].value;
  //       this.rest.sendRole(this.role.name);
  //       /* Role Differntiation */
  //       if (this.rest.getRole() == "ADMIN") {
  //       this.test.getuserprofiles();
  //         // this.test.getuserDetails();
  //         this.myRoute.navigate(['/admindashboard']);
  //       }
  //       else {
  //         //this.test.getuserprofiles();
  //         // this.test.getuserDetails();
  //         this.myRoute.navigate(['/dashboard/home']);
  //       }
  //     }
  //   }, (err) => {
  //     console.log(err);

  //   });
  // }

//Localising Language
  
// _initialiseTranslation(): void {
//   this._translate.get('product_name').subscribe((res: string) => {
//     this.product_name = res;
//   });

//   this._translate.get('product_description').subscribe((res: string) => {
//     this.product_description = res;
//   });

//   this._translate.get('product_location').subscribe((res: string) => {
//     this.product_location = res;
//   });
// } 

// public changeLanguage(): void {
//   this._translateLanguage();
// }
// _translateLanguage(): void {
//   this._translate.use(this.language);
//   this._initialiseTranslation();
// }
// _initTranslate(language) {
//   // Set the default language for translation strings, and the current language.
//   this._translate.setDefaultLang('en');
//   if (language) {
//     this.language = language;
//   }
//   else {
//     // Set your language here
//     this.language = 'en';
//   }
//   this._translateLanguage();
// }


}

