import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition ,GeolocationOptions } from '@ionic-native/geolocation/ngx';
import { LanguageService } from '../providers/language.service';
declare var google;
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  address: string;       // Users Address
  latitude: number;     //Users latitiude
  longitude: number;  //Users longitiude
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
  constructor( public langserv : LanguageService, private geolocation:Geolocation,) { }
  slidesOptions = {
    slidesPerView: 1.5
  }
  selectedtemp:any = this.languages[0].code;
  changelang(event){
    let val = event
    if(event["target"]){
    val =  event.target.value;
    }
   this.langserv.changelang(val);

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
         if (results[5]) {
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
  ngOnInit() {
    this.latlong();
  }

}
