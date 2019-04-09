import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import Book from '../Book';
import Member from '../Member';
import { BookService } from '../book.service';

@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent implements OnInit {

  angForm:FormGroup;
  books: Book[];
  constructor(private fb: FormBuilder, private ib: BookService) { 
    this.createForm();
    this.ib.getBook().
    subscribe((data: Book[]) => {
      this.books = data;
    });
  }

  createForm(){
    this.angForm = this.fb.group({
      card_no: ['', Validators.required, Validators.pattern(/^[0-9]+$/)],
      book_name: ['', Validators.required],
      issue_date: ['', Validators.required],
      return_date: ['', Validators.required]
    })
  }
  
  issueBook(card_no, book_name, issue_date, return_date){
    this.ib.issueBook(card_no, book_name, issue_date, return_date);
    
  }

  clearSelect(){
    this.angForm.patchValue({
      book_name: '',
    });
  }

  ngOnInit() {
    
  }

}
