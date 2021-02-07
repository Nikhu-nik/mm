import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContactmodalPage } from '../contactmodal/contactmodal.page';

@Component({
  selector: 'app-custome-support',
  templateUrl: './custome-support.page.html',
  styleUrls: ['./custome-support.page.scss'],
})
export class CustomeSupportPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentmodal() {
    const modal = await this.modalController.create({
      component: ContactmodalPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
