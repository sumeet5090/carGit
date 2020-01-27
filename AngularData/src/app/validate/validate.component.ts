import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {
  custForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.custForm = this.fb.group({
      carRegNo: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: [''],
      mobile: ['']

    });
  }

  onSubmit(): void {
    console.log(this.custForm.value);
  }
}
