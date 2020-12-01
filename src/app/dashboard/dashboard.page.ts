import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions, DestinationType } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/File/ngx';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  images:string[]=[];
  constructor( private camera: Camera,private file:File, private myRoute: Router) { }

  ngOnInit() {
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
        this.myRoute.navigate(['addpro']);
      })
    })
  }
}
