import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { ServiceIf } from '../ServiceIf';
import { ServiceReq } from '../ServiceReq';
@Component({
  selector: 'app-service-detail',
  template: `
  <h2>Details of the Services</h2>
  <h3>You selected service with ID : {{ser.no}}</h3>
  <h3>You have selected service with Name:{{ser.name}}</h3>
    
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  ser!:ServiceIf;
    constructor(private route: ActivatedRoute,private servicereq: ServiceReq) { }

  ngOnInit() {
    // no=parseInt(this.route.snapshot.paramMap.get('no'));
    // this.serviceNo=no;
    this.route.paramMap.subscribe((params:ParamMap) =>
    {
      let no=params.get('no');
      if(no!=null)
      this.ser=this.servicereq.searchServices(parseInt('no'));
    }
    );
    
  }

}
