import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  custRenew: FormGroup;
  constructor() { }

  ngOnInit() {
    this.custRenew = new FormGroup({
      carRegNo: new FormControl(),
      InsuranceNo: new FormControl(),
      period: new FormControl(),
      password: new FormControl(),
    });
  }
  onSubmit(): void {
    console.log(this.custRenew.value);
  }

}
