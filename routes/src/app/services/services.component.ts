import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceIf } from '../ServiceIf';
import { ServiceReq } from '../ServiceReq';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  
services!:ServiceIf[];
constructor(private router: Router,private servicereq:ServiceReq) { }
ngOnInit()
{

}
onSelect(no:number)
  {
    this.router.navigate(['/services',no])
  }
}
