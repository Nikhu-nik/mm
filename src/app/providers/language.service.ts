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
  getdefaultlang(){
  	this.defaultlang = "en";
  }

  changelang(lang : string){
  	this.translate.setDefaultLang(lang);
  	console.log(this.translate.defaultLang)
  }
}
