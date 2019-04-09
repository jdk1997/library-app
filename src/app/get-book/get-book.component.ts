import { Component, OnInit } from '@angular/core';
import Book from '../Book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-get-book',
  templateUrl: './get-book.component.html',
  styleUrls: ['./get-book.component.css']
})
export class GetBookComponent implements OnInit {

  books: Book[];
  constructor(private ab: BookService) { }

  ngOnInit() {
    this.ab
      .getBook()
      .subscribe((data: Book[]) => {
        this.books = data;
      });
  }

}
