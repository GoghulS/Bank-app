import{Injectable} from '@angular/core';
import {ServiceIf} from './ServiceIf';

@Injectable({
    providedIn:'root'
})
export class ServiceReq{

    services:ServiceIf[] = [
        {"no":1,"name":"Checking and Savings accounts"},
        {"no":2,"name":"Loan and Mortgage services"},
        {"no":3,"name":"Wealth Management"},
        {"no":4,"name":"Providing Credit and Debit Cards"},
        {"no":5,"name":"Overdraft services."}
      ];

constructor(){

}
getServices()
{
    return this.services;
}
searchServices(no:number):ServiceIf
{
    return this.services.filter((service)=> service.no===no)[0];
}
}