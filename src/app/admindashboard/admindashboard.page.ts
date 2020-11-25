import { Component, OnInit } from '@angular/core';
import { RestService } from '../Service/rest.service';
@Component({  
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.page.html',
  styleUrls: ['./admindashboard.page.scss'],
})
export class AdmindashboardPage implements OnInit {
  dark = false;
  userid;
  arr;
  ar;
  name;
  role;
  profilePhoto;
  errmsg: boolean;
  admin: boolean = false;
  user: boolean = false;
  constructor(private rest: RestService) {
    
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
    this.getuserprofiles();
  }
  updateDarkMode() {
    document.body.classList.toggle('dark', this.dark);
  }
  getuserprofiles() {
    this.rest.userprofile().subscribe((result) => {
      if (result === undefined) {
        console.log(result);
        this.errmsg = true;
      }
      else {
        /* to get userdetails */
        this.arr = Object.entries(result).map(([type, value]) => ({ type, value }));
        this.userid = this.arr[1].value;
        this.name = this.userid.fullname;
        console.log(this.userid.name);
       // this.profilePhoto = "http://ec2-18-141-56-81.ap-southeast-1.compute.amazonaws.com:4000/"+this.userid.profilephoto;
        this.rest.sendId(this.userid.id);
      
         /* to get role of user */
  
        this.ar = Object.entries(this.userid.roles).map(([type, value]) => ({ type, value }));
        this.role = this.ar[0].value;
         //console.log(this.role.name);
        this.rest.sendRole(this.role.name);
        /* Role Differntiation */
       
    
      }   
    }, (err) => {
      console.log(err);
  
    });
  }
}
