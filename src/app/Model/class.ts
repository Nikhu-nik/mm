export class Register {
  fullname: String;
  number:String;
  profilephoto:string;
  roles: String[];

}
export class Roles {
  roles: string;
}
export class Customer{
  name:String;
  email:String;
}

export class Login {
  fullname: String;
  number: String;
}

export class Forgot {
  fullname: String;
  number: String;
 
}

export class Product {
  name: String;
  sub: String;
  price: Number;
  quant: String;
  desc: String;
  location:String;
  productphone:Number;
  productfullname:String;
  category: String;
  imgbase: string;
 }

 export class PostAdd{
   advcountry:String;
  advname:String;
  advdesc:String;
  advcity:String;
  advprice:Number;
  advlocation:String;
  advquant:Number;
  advcategory:String;
  advphone:Number;
  advfullname:String;
  userId:Number;
  advimgbase: string;
  
}


  export class AddtoCart {
      productname: String;
      productprice: Number;
     // quantity: Number;
      userId: Number;
      productId: Number;
      image: File[];
  }