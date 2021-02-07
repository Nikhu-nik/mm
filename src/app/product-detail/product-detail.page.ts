import { Component, OnInit ,ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../Service/rest.service';
import { CallNumber } from '@ionic-native/call-number/ngx';
// import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Register, Product } from '../Model/class';
// import { CallNumber } from '@ionic-native/call-number/ngx';
import { HTTP } from '@ionic-native/http/ngx';
import { AlertController, ModalController, ToastController, IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  favorite:boolean=false;
  sliderOpts = {
    zoom:{
      maxRatio:2
    }
  }
  id: number;
  arr: any;
  file:string = null;
  userid: any;
  errmsg: any;
  imgbase:string = '';
  productfullname;
  productid: any;
  location;
  name;
  productphone:number;
  price;
  city;
  quant;
  desc;
  Quantity: any;
  total;

  advname;
  advdesc;
  advcity;
  advprice;
  advquant;
  advcategory;
  advphone;
  advfullname
  advimgbase:string = '';
  public formcontrol: FormGroup;
 
  @ViewChild(IonSlides, { static: false }) slides: IonSlides
  products: Product[] = [];
  constructor(private call: CallNumber,private rest: RestService, private fb: FormBuilder,
     private myRoute: Router, private route: ActivatedRoute) {
       this.favorite = this.productid
    this.route.params.subscribe(params => this.doSearch(params));
  }
  SlideChanged() {
  }
  ionViewDidLoad() {
    setTimeout(() =>
      this.slides.slideTo(5, 10000), 1000);
  }

  slidesDidLoad(slides: IonSlides) {
   // slides.startAutoplay();
  }

  slideOptions = {
    initialSlide: 1,
    speed: 400,
  };

  
  callnow(productphone){
 
    this.call.callNumber(productphone, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));
  
  }

  ngOnInit() {
    this.getAdvertised();
  }

  doSearch(param) {
    this.id = param.id;
  }

 

  getAdvertised() {
    this.rest.getProduct(this.id).subscribe((result) => {
      console.log(result);
      if (result === undefined) {
        console.log(result);
        this.errmsg = true;
      }
      else {
        this.arr = Object.entries(result).map(([type, value]) => ({ type, value }));
        this.userid = this.arr[0].value;
        this.advname = this.userid.advname;
        this.advquant =  this.userid.advquant;
        this.advprice = this.userid.advprice;
        this.advquant = this.userid.advquant;
        this.advdesc = this.userid.advdesc;
        this.location = this.userid.location;
        this.advcity = this.userid.advcity;
        this.advphone = this.userid.advphone;
        this.advfullname = this.userid.advfullname;
        this.advimgbase = this.userid.advimgbase;
       this.productid = this.userid.id;
       localStorage.setItem("productId", this.userid.id);
       localStorage.setItem("advname", this.userid.advname);
       localStorage.setItem("advprice", this.userid.advprice);
       localStorage.setItem("advimgbase", this.userid.advimgbase);
       localStorage.setItem("advcity", this.userid.advcity);
localStorage.setItem("advphone", this.userid.advphone);
localStorage.setItem("advfullname", this.userid.advfullname);
       

      }
    }, (err) => {
      console.log(err);
    });
  }

//   getProducts() {
//     this.rest.getProduct(this.id).subscribe((result) => {
//       console.log(result);
//       if (result === undefined) {
//         console.log(result);
//         this.errmsg = true;
//       }
//       else {
//         this.arr = Object.entries(result).map(([type, value]) => ({ type, value }));
//         this.userid = this.arr[0].value;
//         this.name = this.userid.name;
//         this.price = this.userid.price;
//         this.quant = this.userid.quant;
//         this.desc = this.userid.desc;
//         this.location = this.userid.location;
//         this.city = this.userid.city;
//         this.productphone = this.userid.productphone;
//         this.productfullname = this.userid.productfullname;
//         this.imgbase = this.userid.imgbase;
//        this.productid = this.userid.id;
//         localStorage.setItem("productId", this.userid.id);
//         localStorage.setItem("name", this.userid.name);
//         localStorage.setItem("price", this.userid.price);
//         localStorage.setItem("imgbase", this.userid.imgbase);
//         localStorage.setItem("city", this.userid.city);
// localStorage.setItem("productphone", this.userid.productphone);
// localStorage.setItem("productfullname", this.userid.productfullname);

//       }
//     }, (err) => {
//       console.log(err);
//     });
//   }


  validation() { 

    this.formcontrol = this.fb.group({
      name: localStorage.getItem("name"),
      price: localStorage.getItem("price"),
      productId: localStorage.getItem("productId"),
      imgbase: localStorage.getItem("imgbase"),
      quant: ['', Validators.required],
      total: [''],
      userId: this.rest.getId(),
    });
  }
}