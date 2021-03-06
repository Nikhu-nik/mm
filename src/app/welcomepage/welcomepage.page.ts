import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { DashboardPage } from '../dashboard/dashboard.page';
import { HomePage } from '../home/home.page';
import { LoginPage } from '../login/login.page';


@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.page.html',
  styleUrls: ['./welcomepage.page.scss'],
})
export class WelcomepagePage implements OnInit {

  constructor(private menuCtrl:MenuController,
    private router: Router,private modalctrl:ModalController,
) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

}
