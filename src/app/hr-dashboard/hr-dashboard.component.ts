import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hr-dashboard',
  templateUrl: './hr-dashboard.component.html',
  styleUrls: ['./hr-dashboard.component.css']
})
export class HrDashboardComponent implements OnInit {

  name: string;
  gender: string;
  jobLevel: number;
  designation: string;
  productUnit: string;
  location: string;
  workEmail: string;

  constructor() { }

  ngOnInit(): void {
  }

  submit() {

  }

  sendToApi(): void {

  }

}
