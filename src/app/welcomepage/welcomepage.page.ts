import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { DashboardPage } from '../dashboard/dashboard.page';
import { HomePage } from '../home/home.page';
import { LoginPage } from '../login/login.page';
import { LanguageService } from '../providers/language.service';


@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.page.html',
  styleUrls: ['./welcomepage.page.scss'],
})
export class WelcomepagePage implements OnInit {

  constructor(private menuCtrl:MenuController,public langserv:LanguageService,
    private router: Router,private modalctrl:ModalController,
) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  changelang(lang:string){
    this.langserv.changelang(lang);
   
  }
}
