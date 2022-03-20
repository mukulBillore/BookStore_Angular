export class UserRegistrationModel {
    bookName!: string;
    authorName!: string;
    bookDescription!: string;
    bookImage!: string;
    price!: number;
    quantity!: number;
    
    constructor(bookName:string,authorName:string,bookDescription:string,bookImage:string,price:number,quantity:number){
        this.bookDescription=bookDescription;
        this.bookName=bookName;
        this.authorName=authorName;
        this.price=price;
        this.quantity=quantity;
        this.bookImage=bookImage;
    }
}
