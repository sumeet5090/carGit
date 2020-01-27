import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
        carRegNo: new FormControl(),
        carModel: new FormControl(),
        engine: new FormControl(),
        locality: new FormControl(),
        
        custFullName: new FormControl(),
        mobile: new FormControl(),
        email: new FormControl(),
        password: new FormControl(),
      });
  }
  onSubmit(): void {
    console.log(this.registrationForm.value);
  }

}



