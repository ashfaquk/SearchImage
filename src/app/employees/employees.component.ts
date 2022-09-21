import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('i')
  }

  ngOnDestroy(): void {
    console.log('D')
  }

  ngOnChange(): void {
    console.log('C')
  }

  ngDocheck(): void {
    console.log('DO')
  }


}
