import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  defaultlang : string
  constructor(public http: HttpClient, public translate: TranslateService) { 
    this.defaultlang = "en"
  }
  ngOnInit(){
   this.defaultlang = localStorage.getItem('en'); 
  }
  getdefaultlang(){
  	this.defaultlang = "en";
  }
  // getDefaultLanguage(){
  //   let language = this.translate.getBrowserLang();
  //   this.translate.setDefaultLang(language);
  //   return language;
  // }
  changelang(lang : string){
  	this.translate.setDefaultLang(lang);
  	console.log(this.translate.defaultLang)
  }
}
