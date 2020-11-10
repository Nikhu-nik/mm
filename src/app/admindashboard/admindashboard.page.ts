import { Component, OnInit } from '@angular/core';

@Component({  
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.page.html',
  styleUrls: ['./admindashboard.page.scss'],
})
export class AdmindashboardPage implements OnInit {
  dark = false;
  constructor() {
    const prefersColor = window.matchMedia('(prefers-color-scheme: dark)');
    this.dark = prefersColor.matches;
    this.updateDarkMode();
    prefersColor.addEventListener(
      'change',
      mediaQuery => {
        this.dark = mediaQuery.matches;
        this.updateDarkMode();
      }
    );
   }

  ngOnInit() {
  }
  updateDarkMode() {
    document.body.classList.toggle('dark', this.dark);
  }
}
