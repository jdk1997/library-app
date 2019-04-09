import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookService } from '../book.service';
import Book from '../Book';

@Component({
  selector: 'app-return-book',
  templateUrl: './return-book.component.html',
  styleUrls: ['./return-book.component.css']
})
export class ReturnBookComponent implements OnInit {

  angForm: FormGroup;
  books: Book[];
  constructor(private fb: FormBuilder, private rb: BookService) { 
    this.createForm();
    this.rb.getBook().
    subscribe((data: Book[]) => {
      this.books = data;
    });
  }

  createForm(){
    this.angForm = this.fb.group({
      card_no: ['', Validators.required, Validators.pattern(/^[0-9]+$/)],
      book_name: ['', Validators.required]
    })
  }
  
  returnBook(card_no, book_name){
    this.rb.returnBook(card_no, book_name);
  }

  ngOnInit() {
  }

}
