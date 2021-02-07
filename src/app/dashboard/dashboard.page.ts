import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraOptions, DestinationType } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/File/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { FilePath } from '@ionic-native/file-path/ngx';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  images:string[]=[];
  image;
  base64Image: string;
  webview: any;
  constructor( public sanitizer:DomSanitizer,private camera: Camera,  private file: File, 
    private filePath: FilePath, 
    private myRoute: Router) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    document.querySelector('#tab-button-tab3').shadowRoot.querySelector('.button-native').setAttribute('style', 'margin-top: -2px');
}
  async pictureFromCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      saveToPhotoAlbum: true
    }

    this.takePhoto(options);
    
  }

  async takePhoto(options: CameraOptions) {
    try {
      const result = await this.camera.getPicture(options);

      this.image = 'data:image/jpeg;base64,${result}'
    }
    catch (e) {
      console.error(e);
    }
  }
}