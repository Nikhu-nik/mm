import { Component,ViewChild , OnInit } from '@angular/core';
import {style, state, animate, transition, trigger, keyframes} from '@angular/animations';
import {IonSlides} from '@ionic/angular';
@Component({
  selector: 'app-slidespage',
  templateUrl: './slidespage.page.html',
  styleUrls: ['./slidespage.page.scss'],
  animations: [
    
    trigger('bounce', [
          state('*', style({
              transform: 'translateX(0)'
          })),
          transition('* => rightSwipe', animate('700ms ease-out', keyframes([
            style({transform: 'translateX(0)', offset: 0}),
            style({transform: 'translateX(-65px)',  offset: 0.3}),
            style({transform: 'translateX(0)',     offset: 1.0})
          ]))),
          transition('* => leftSwipe', animate('700ms ease-out', keyframes([
            style({transform: 'translateX(0)', offset: 0}),
            style({transform: 'translateX(65px)',  offset: 0.3}),
            style({transform: 'translateX(0)',     offset: 1.0})
          ])))
      ])
    ]
})
export class SlidespagePage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  skipMsg: string = "Skip";
  state: string = 'x';
  constructor() { }

  ngOnInit() {
  }
  slideMoved() {
    if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex()) 
      this.state = 'rightSwipe';
    else 
      this.state = 'leftSwipe';
  }

  animationDone() {
    this.state = 'x';
  }
  slideChanged() {
    if (this.slides.isEnd())
      this.skipMsg = "Alright, I got it";
  }
}
