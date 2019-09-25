import { Url } from 'url';

export class blogPost {
    constructor(
      
        public title:String,
        public body:String ,
        public imgurl:Url ,
        public date:String,
        public email:String,
        public name:String 
      )
      { }
}
