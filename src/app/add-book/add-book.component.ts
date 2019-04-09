import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ab: BookService) {
    this.createForm();
  }

  createForm(){
    this.angForm = this.fb.group({
      book_name: ['', Validators.required],
      author: ['', Validators.required]
    })
  }

  addBook(book_name, author){
    this.ab.addBook(book_name, author);
  }

  ngOnInit() {
  }

}
