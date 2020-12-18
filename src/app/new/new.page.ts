import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition ,GeolocationOptions } from '@ionic-native/geolocation/ngx';
import {  NavController } from '@ionic/angular'

import {  Router } from '@angular/router';
declare var google;
@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {
















  address: string;
  lng:any;
  latitude: number;     //Users latitiude
  longitude: number;  //Users longitiude
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
  constructor(public route:Router,public navCtrl: NavController,private geolocation:Geolocation) { }
  ngOnInit() {
    this.latlong();
  }
 gotoSearch() {
  this.route.navigate(['/product-search-page']);
   
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
         if (results[6]) {
            address = results[6].formatted_address;
            ref.address = address;
         }
        }
       });
    }

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

  
}
