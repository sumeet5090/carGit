import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {
  custClaim: FormGroup;
  constructor() { }

  ngOnInit() {
    this.custClaim = new FormGroup({
      accidentAddr: new FormControl(),
      email: new FormControl(),
      mobile: new FormControl(),
      carRegNo: new FormControl(),
      carModel: new FormControl(),
      insuranceName: new FormControl(),
      insuranceNo: new FormControl(),
      password: new FormControl()

    });
  }
  onSubmit(): void {
    console.log(this.custClaim.value);
  }

}
