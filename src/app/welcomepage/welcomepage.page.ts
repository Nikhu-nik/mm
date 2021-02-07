import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { enterAnimation } from '../nav-animation';

@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.page.html',
  styleUrls: ['./welcomepage.page.scss'],
})
export class WelcomepagePage implements OnInit {

  constructor(private router: Router,private navCtrl: NavController) { }

  ngOnInit() {
  }
  navigateToLogin() {
    this.navCtrl.setDirection('forward', true, 'forward', enterAnimation);
    this.router.navigateByUrl('login');
  }

  navigateTosignup() {
    this.navCtrl.setDirection('forward', true, 'forward', enterAnimation);
    this.router.navigateByUrl('signup');
  }
}
