import { Component, OnInit } from '@angular/core';
import { RestService } from '../Service/rest.service';
import { Register, PostAdd } from '../Model/class';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-ads',
  templateUrl: './ads.page.html',
  styleUrls: ['./ads.page.scss'],
})
export class AdsPage implements OnInit {
  selectTabs = 'ADS';
  myphoto: any;
  postadds: PostAdd[] = [];
  public data: Register = new Register();
  constructor( private menu: MenuController, public rest: RestService) { }

  ngOnInit() {
   // this.retrieval();
  }

ionViewWillEnter()
{
  this.retrieval();
}


 retrieval(){
    this.postadds = [];
    this.rest.getproductOfUser().subscribe((PostAdd) => {
     if(PostAdd === undefined) {
        console.log(PostAdd);
      }
      else {
        console.log(PostAdd.postadd);
        let userid = localStorage.getItem("LoggedInUserId");
        console.log(userid);
        let data = PostAdd.postadd;
        for(var i = 0;i<data.length;i++)
        {
           if(data[i].userId == userid)
           {
             console.log(data[i].userId);
             this.postadds.push(data[i]);
           }
        }
       // this.postadds = PostAdd.postadd;
      }
    } , (err) => {
      console.log(err);
    })
  }



}

