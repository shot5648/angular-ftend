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

  constructor(private employeeService: EmployeeService) { }

  employees: Employee[];

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'emailId'];

  ngOnInit(): void {
     this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    })
  }

}
