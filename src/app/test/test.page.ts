import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';
export interface Data {
  movies: string;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TestPage implements OnInit {
  public data: Data;
  public columns: any;
  public rows: any;
  constructor(private http:HttpClient) { 
    this.columns = [
      { name: 'Name' },
      { name: 'Company' },
      { name: 'Genre' }
    ]; 
  

  this.http.get<Data>('../../assets/com.json')
  .subscribe((res) => {
    console.log(res)
    this.rows = res.movies;
  });
}

  ngOnInit() {
  }

 
}
