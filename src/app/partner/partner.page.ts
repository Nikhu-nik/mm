import { Component, OnInit, ViewChild } from '@angular/core';
import {IonContent} from '@ionic/angular';
// import { Calendar } from '@ionic-native/calendar/ngx';
@Component({
  selector: 'app-partner',
  templateUrl: './partner.page.html',
  styleUrls: ['./partner.page.scss'],
})
export class PartnerPage implements OnInit {
  @ViewChild(IonContent , {static:true}) content: IonContent ;
  stateData : any[];
stateSelected: any;
districtSelected:any;
districtData:any[];
myDate:string;
myTime:string;
myDateNTime:string;
offsetTop:0;
scrollToTop= 'smooth';

  constructor() { 
   

    this.stateData = [
       {
          "id": 1,
          "name": "Andhra Pradesh"
        },
        {
          "id": 2,
          "name": "Arunachal Pradesh"
        },
        
        {
          "id": 3,
          "name": "Assam"
        },
        {
          "id": 4,
          "name": "Bihar"
        },
        {
          "id": 5,
          "name": "Chattisgarh"
        },
        {
          "id": 6,
          "name": "Delhi"
        },
        {
          "id": 7,
          "name": "Goa"
        },
        {
          "id": 8,
          "name": "Gujarath"
        },
        {
          "id": 9,
          "name": "Haryana"
        },
        {
          "id": 10,
          "name": "Himachal Pradesh"
        },
        {
          "id": 11,
          "name": "Jharkhand"
        },
        {
          "id": 12,
          "name": "Karnataka"
        },

        {
          "id": 13,
          "name": "Kerla"
        },
        {
          "id": 14,
          "name": "Madhya Pradesh"
        },
        {
          "id": 15,
          "name": "Maharashtra"
        },
        {
          "id": 16,
          "name": "Manipur"
        },
        {
          "id": 17,
          "name": "Meghalaya"
        },
        {
          "id": 18,
          "name": "Mizoram"
        },
        {
          "id": 19,
          "name": "Nagaland"
        },
        {
          "id": 20,
          "name": "Odisha"
        },
        {
          "id": 21,
          "name": "Punjab"
        },
        {
          "id":22,
          "name": "Rajasthan"
        },
        {
          "id": 23,
          "name": "Sikkim"
        },
        {
          "id": 24,
          "name": "Tamil Nadu"
        },
        {
          "id": 25,
          "name": "Telangana"
        },
        {
          "id": 26,
          "name": "Tripura"
        },
        {
          "id": 27,
          "name": "Uttar Pradesh"
        },
        {
          "id": 28,
          "name": "UttaraKhand"
        },
        {
          "id": 29,
          "name": "West Bengal"
        }
];
this.districtData = [
 {
      "id": 1,
      "name": "Bagalkote"
    },
    {
      "id": 2,
      "name": "Bengaluru Urban"
    },
    {
      "id": 3,
      "name": "Bengaluru Rural"
    },

     {
      "id": 4,
      "name": "Belagavi"
    },
     {
      "id": 5,
      "name": "Ballari"
    },
     {
      "id": 6,
      "name": "Bidar"
    }, {
      "id": 7,
      "name": "Vijayapura"
    },
    {
      "id": 8,
      "name": "Chamarajanagar "
    }, 
    {
      "id": 9,
      "name": "Chikballapura"
    }, 
    {
      "id": 10,
      "name": "Chikmagalur"
    }, 
    {
      "id": 10,
      "name": "Davangere"
    }, 
    {
      "id": 11,
      "name": "Dharwad"
    }, 
    {
      "id": 12,
      "name": "Gadag"
    }, 
    {
      "id": 14,
      "name": "Kalaburagi "
    }, 
    {
      "id": 15,
      "name": "Hassan"
    }, 
    {
      "id": 16,
      "name": "Haveri"
    }, 
    {
      "id": 17,
      "name": "Kodugu"
    }, 
    {
      "id": 18,
      "name": "Kolar"
    }, 
    {
      "id": 19,
      "name": "Koppal"
    }, 
    {
      "id": 20,
      "name": "Mandya"
    }, 
    {
      "id": 21,
      "name": "Mysuru"
    }, 
    {
      "id": 22,
      "name": "Raichur"
    }, 
    {
      "id": 23,
      "name": "Ramanagara"
    }, 
    {
      "id": 24,
      "name": "Shivamoga"
    }, 
    {
      "id": 25,
      "name": "Tumkuru"
    }, 
    {
      "id": 26,
      "name": "Udupi"
    }, 
    {
      "id": 27,
      "name": "Uttara Karnataka"
    }, 
    {
      "id": 28,
      "name": "Yadgir"
    } 
];
  }

  ngOnInit() {
  }
  scrollbuttom(){
    this.content.scrollToBottom();
  }
scrolltop(){
  this.content.scrollToTop();

}
onScroll(e){
this.offsetTop = e.detail.scrolltop;
//console.log(e);
}
//   openCalendar(){
//     this.calendar.openCalendar(new Date()).then(
//         (msg) => { console.log(msg); },
//         (err) => { console.log(err); }
//     );
// } 
}
