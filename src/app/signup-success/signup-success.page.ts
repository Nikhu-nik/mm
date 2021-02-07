import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup-success',
  templateUrl: './signup-success.page.html',
  styleUrls: ['./signup-success.page.scss'],
})
export class SignupSuccessPage implements OnInit {

  constructor(private myRoute: Router,public modalController: ModalController) { }

  ngOnInit() {
   this.dissmiss();
  }
dissmiss(){
  this.modalController.dismiss();
  
  this.myRoute.navigate(['/login']);
}
}
