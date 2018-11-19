import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./customer-new.component.css']
  // providers: [{provide: ErrorStateMatcher }],
})
export class CustomerNewComponent implements OnInit {
  emailFormControl: FormControl;

  constructor() {}

  ngOnInit() {
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
  }

}
