import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../Service/data.service';
import { LanguageService } from '../providers/language.service';
import { IonSlides, Platform } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { RestService } from '../Service/rest.service';
import { ProductSearchPage } from '../product-search/product-search.page';
import { PostAdd } from '../Model/class';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
   items: Array<any>;
  loader=false;
  languages: any[ ] = [
    {
      id: 1,
      type: 'English',
      imagesrc:"assets/imgs/download.png",
      code:"en"

    },
    {
      id: 2,
      type:'ಕನ್ನಡ',
      code:"kan"
    },
    {
      id: 3,
      type:'हिंदी',
      code:"hin"

    },{
      id:4,
      type:'కన్నడ',
      code:"tel"
    }
  ];
  datas: any;
  arr;
  states:any;
  postadds: PostAdd[] = [];
  public categories = [];
  public slides = [];
  public featuredProducts = [];
  public bestSellProducts = [];
  constructor(public modalController: ModalController,
    public platform:Platform,
    public langserv : LanguageService,public rest: RestService,
    private myRoute: Router,private data: DataService) { 
     
    }
    slideOptions = {
      initialSlide: 1,
      speed: 2000

    };
    slidesDidLoad(slides: IonSlides) {
      slides.startAutoplay();
    }

  ngOnInit() {
  
   this.retrival();
   //this.userpostedgetproduct();
    this.categories = this.data.getCategories();
    this.slides = this.data.getSlides();
  }
  selectedtemp:any = this.languages[0].code;
  changelang(event){
    let val = event
    if(event["target"]){
    val =  event.target.value;
    }
   this.langserv.changelang(val);

  }

  opencategorypage(){
    this.myRoute.navigate(['/category']);
  }

  async opensearch(){
    // const modal = await this.modalController.create({
    //   component: ProductSearchPage,
    //   cssClass: 'my-custom-class'
    // });
    // return await modal.present();
    // this.myRoute.navigate[('/product-search')];
    console.log('clicked');
    this.myRoute.navigate(['/product-search']);
  }


 //Mapping Products Posted by User
//  userpostedgetproduct(){
//   this.rest.MapUserProduct().subscribe((result) => {
//    console.log(result);
//    if(result == undefined) {
//      console.log(result);
//    }
//    else{
//      //console.log(result);
//      this.arr = Object.entries(result).map(([type, value]) => ({type , value }));
//      this.states = this.arr[0].value;
//    }
//  },(err) => {
//    console.log(err);
//  });
//    }


   retrival(){
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































}
