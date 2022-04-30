export class OrderModel {
    quantity:number;
    address:string;
    price:number;
    userId:number;
    bookId:number;
    cancel:boolean;

    constructor(quanity:number,address:string,bookId:number,price:number,userId:number,cancel:boolean){
        this.userId=userId;
        this.bookId=bookId;
        this.quantity=quanity;
        this.price=price;
        this.address=address;
        this.cancel=cancel;
    } 
}
