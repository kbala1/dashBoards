import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  skill = new FormControl('');
  experience = new FormControl('');
  skills = [];

  training = new FormControl('');
  duration = new FormControl('');
  trainingDetails = [];

  constructor() { }

  ngOnInit(): void {
  }

  addSkill(): void {
    this.skills.push({skill: this.skill.value, experience: this.experience.value});
    this.skill.setValue('');
    this.experience.setValue('');
  }

  reset(): void {
    this.skills = [];
    this.skill.setValue('');
    this.experience.setValue('');
    console.log("Form reset");
  }

  submit(): void {
    if (this.skills.length === 0) {
      return;
    }
    console.log("Form submitted");
  }

  addTrainingDetail(): void {
    this.trainingDetails.push({training: this.training.value, duration: this.duration.value});
    this.training.setValue('');
    this.duration.setValue('');
  }

  resetTraining(): void {
    this.trainingDetails = [];
    this.training.setValue('');
    this.duration.setValue('');
    console.log("Training Form reset");
  }

  submitTraining(): void {
    if (this.trainingDetails.length === 0) {
      return;
    }
    console.log("Training Form submitted");
  }
}
