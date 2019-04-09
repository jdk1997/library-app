import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  uri = 'http://localhost:8022';
  constructor(private http: HttpClient) { }

  addBook(book_name, author){
    var msg;
    const obj = {
      book_name: book_name,
      author: author
    };
    console.log(obj);
    this.http.post(`${this.uri}/add-books`, obj)
      .subscribe(res => alert(res['result']));
  }

  issueBook(card_no, book_name, issue_date, return_date){
    const obj = {
      card_no: card_no,
      book_name: book_name,
      issue_date: issue_date,
      return_date: return_date
    };
    console.log(obj);
    this.http.post(`${this.uri}/issue-books`, obj)
    .subscribe(res => alert(res['result']));
  }

  returnBook(card_no, book_name){
    const obj = {
      card_no: card_no,
      book_name: book_name
    };
    this.http.post(`${this.uri}/return-book`, obj)
    .subscribe(res => alert(res['result']));
  }

  getBook(){
    return this
          .http
          .get(`${this.uri}/view-books`);
  }
}
