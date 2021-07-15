import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-section',
  templateUrl: './card-section.component.html',
  styleUrls: ['./card-section.component.scss']
})
export class CardSectionComponent implements OnInit {

  merchantForm!: FormGroup ;

  constructor(
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.merchantForm = this._formBuilder.group({
      fullname: ['',Validators.required],
      email: ['',Validators.required],
      phoneNumber: ['',Validators.required],
      company: ['',Validators.required],
      role: ['',Validators.required],
      website: ['',Validators.required],
      industry: ['',Validators.required],
      check: ['',Validators.required],
    })
  }

  onSubmit(){

  }

}
