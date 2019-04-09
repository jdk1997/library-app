import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private am: MemberService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      card_no: ['', Validators.required, Validators.pattern(/^[0-9]+$/)],
      fname: ['', Validators.required, Validators.pattern(/^[a-zA-Z]+$/)],
      lname: ['', Validators.required, Validators.pattern(/^[a-zA-Z]+$/)],
      email: ['', Validators.required, Validators.pattern(/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/)]
    })
  }

  addMember(card_no, fname, lname, email) {
    this.am.addMember(card_no, fname, lname, email);
  }

  ngOnInit() {
  }

}
