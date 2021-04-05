import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeModel } from '../data/employee.model';

@Component({
  selector: 'app-emp-managment',
  templateUrl: './emp-managment.component.html',
  styleUrls: ['./emp-managment.component.css']
})
export class EmpManagmentComponent implements OnInit {
  orignalEmployeeModel: EmployeeModel  = {
    firstName: null,
    lastName: null,
    email: null,
    contact:null,
    address: null,
    username: null,
    password: null,
    gender: null,
    qualification:null,
    experience: null,
    language:null
  };

  employeeModel: EmployeeModel = {
    ...this.orignalEmployeeModel
  
  };

  qualification: string[] = [];
  experince: string[] = [];
  language: { [key: string]: Object }[] = [];
   

  constructor() { }

  ngOnInit(): void {

    
    this.qualification = ['None', 'UG', 'PG'];
    this.experince = ['None', '1 Year', '2 Year', '3 Year', '4 Year'];
    this.language = [
    {name:'C/C++', value:'C/C++', checked:false},
    {name:'Java', value:'Java', checked:false},
    {name:'Python', value:'Python', checked:false}
  ]
    
    
  }

  
 

  onSubmit(form: NgForm) {
    console.log(form.value);
  }

}
