import { Injectable } from '@angular/core';
export interface ICategory {
  id: number,
  name: string,
  categoryimage:string
}

export interface ISlides {
  id: number,
 slideimage: string,
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

 

  getCategories() {
    let categories = [];

    let cat1: ICategory = {
      id: 1,
      name:'Vegetables',
     categoryimage: '../../assets/category/vegetables.png'
    }
    let cat2: ICategory = {
      id: 2,
      name:'Fruits',
      categoryimage:  '../../assets/category/f.jpg'
    }

    let cat3: ICategory = {
      id: 3,
      name:'Coffee',
      categoryimage:  '../../assets/category/coffee.jpg'
    }
    let cat4: ICategory = {
      id: 3,
      name:'Spices',
      categoryimage:  '../../assets/category/spi.jpg'
    }
    let cat5: ICategory = {
      id: 3,
      name:'Oils',
      categoryimage:  '../../assets/category/oils.jpg'
    }
    let cat6: ICategory = {
      id: 3,
      name:'Chillies',
      categoryimage:'../../assets/category/chiilies.png'
    }

    categories.push(cat1, cat2, cat3,cat4,cat5,cat6);

    return categories;
  }



  getSlides() {
    let slides = [];

    let slide1: ISlides = {
      id: 1,
    slideimage: '../../assets/slides/slide8.jpg'
    }
    let slide2: ISlides = {
      id: 2,
    slideimage:  '../../assets/slides/slide2.jpg'
    }

    let slide3: ISlides = {
      id: 3,
     slideimage:  '../../assets/slides/slide11.jpg'
    }
    let slide4: ISlides = {
      id: 4,
    slideimage:  '../../assets/slides/slide1.jpg'
    }
   

    slides.push(slide1, slide2, slide3,slide4);

    return slides;
  }
}
