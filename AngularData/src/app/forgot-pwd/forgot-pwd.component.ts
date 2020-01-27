import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.css']
})
export class ForgotPwdComponent implements OnInit {
  custForgotPwd: FormGroup;

  constructor() { }

  ngOnInit() {
    this.custForgotPwd = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }
  onSubmit(): void {
    console.log(this.custForgotPwd.value);
  }

}
