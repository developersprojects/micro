import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.employeeForm= new FormGroup({
        userName: new FormControl(),
        email: new FormControl(),
        password: new FormControl()
      });
  }


  onSubmit(): void{
    console.log(this.employeeForm);
    console.log(this.employeeForm.value);
    
  this.http.post("http://localhost:8701/rest/user/add",this.employeeForm.value,{}).subscribe(response=>{
    console.log("Reponse from Controller ",response)
    localStorage.setItem("tokrn","ttbcv")
    console.log(localStorage)
  })
    
  }
}
