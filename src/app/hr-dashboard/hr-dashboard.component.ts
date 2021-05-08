import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.css']
})
export class HrDashboardComponent implements OnInit {

  name = new FormControl('');
  gender = new FormControl('');
  jobLevel = new FormControl('');
  designation = new FormControl('');
  productUnit = new FormControl('');
  location = new FormControl('');
  workEmail = new FormControl('');

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  submit(): void {
    // call api
    console.log(this.name.value, this.designation, this.jobLevel, this.productUnit, this.location, this.workEmail);
    console.log("value submitted");
    const body = {
      api:"add_emp_data",
      data: {
        emp_name: this.name.value,
        gender: this.gender.value,
        job_level: this.jobLevel.value,
        designation: this.designation.value,
        pu: this.productUnit.value,
        base_location: this.location.value,
        mail_id: this.workEmail.value,
        // available:
      }
    };

    this.sendToApi(body);
  }

  sendToApi(body: {}): void {
    this.http
      .post('https://ot7yoxh5c2.execute-api.us-east-1.amazonaws.com/Test', body)
      .subscribe(response => {
        console.log(response);
      });
  }


}
