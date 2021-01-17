import { EmployeeService } from './../employee.service';
import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';

// const ELEMENT_DATA: Employee[] = [{
//   id: 1,
//   firstName: "a",
//   lastName: "TE",
//   emailId: "test.add@mail.com"
//   },
//   {
//   id: 2,
//   firstName: "bus",
//   lastName: "raki",
//   emailId: "test.add@mail.com"
// }];


@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private EmployeeService: EmployeeService) { }

  employees: Employee[];

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'emailId'];

  // employees = ELEMENT_DATA;

  ngOnInit(): void {

  }

  private getEmployees(){
    this.EmployeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    })
  }

}
