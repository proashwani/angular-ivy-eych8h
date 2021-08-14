import { Component, VERSION } from '@angular/core';
import { Employee } from './Employee';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular 8' + VERSION.major;
  employees: Employee[] = [];
  originalEmployess: Employee[] = [];
  searchTxt: string;
  employee: Employee;
  submitted: boolean;
  searchGenderM: string;
  searchGenderF: string;

  constructor() {
    this.employees.push(
      new Employee(101, 'test1', 'lastname1', 'test@test.com', 'Male')
    );
    this.employees.push(
      new Employee(102, 'test2', 'lastname2', 'test@test.com', 'Male')
    );
    this.employees.push(
      new Employee(103, 'test3', 'lastname3', 'test@test.com', 'Male')
    );
    this.employees.push(
      new Employee(104, 'test4', 'lastname4', 'test@test.com', 'Female')
    );
    this.employees.push(
      new Employee(105, 'test5', 'lastname5', 'test@test.com', 'Female')
    );
    this.employees.push(
      new Employee(106, 'test6', 'lastname6', 'test@test.com', 'Female')
    );
    this.originalEmployess = this.employees;
    this.employee = new Employee(0, '', '', '', 'Male');
    this.submitted = false;
  }

  public saveEmployee() {
    this.originalEmployess.push(this.employee);
    this.employee = new Employee(0, '', '', '', 'Male');
  }

  search(fieldName: string): void {
    this.employees = this.originalEmployess.filter(emp =>
      emp.getFirstName().startsWith(this.searchTxt)
    );
  }

  filterBasedOnGender(): void {
    console.log(this.searchGenderF);
    console.log(this.searchGenderM);
    if (this.searchGenderF && this.searchGenderM) {
      this.employees = this.originalEmployess;
    } else {
      this.employees = this.originalEmployess.filter(emp =>
        this.searchGenderF
          ? emp.getGender() === 'Female'
          : emp.getGender() === 'Male'
      );
    }
  }
}
