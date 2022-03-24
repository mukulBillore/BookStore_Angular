export class UserRegistrationModel {
    firstName!: string;
    lastName!: string;
    email!: string;
    password!: string;
    address!: string;
  
    constructor(firstName:string,lastName:string,email:string,password:string,address:string){
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.password=password;
        this.address=address;
    }
}
