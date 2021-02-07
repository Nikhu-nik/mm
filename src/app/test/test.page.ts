import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
 
  constructor(
    private animatioCntrl: AnimationController,
  ) { }

  ngOnInit() {
   
  }

  

 
}