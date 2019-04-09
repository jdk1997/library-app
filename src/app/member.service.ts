import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  uri = "http://localhost:8022";

  constructor(private http: HttpClient) { }

  addMember(card_no, fname, lname, email){
    const obj = {
      card_no: card_no,
      fname: fname,
      lname: lname,
      email: email
    };
    console.log(obj);
    this.http.post(`${this.uri}/member-create`, obj)
      .subscribe(res => alert(res['result']));
  }

  getMember(){
    return this
          .http
          .get(`${this.uri}/view-members`);
  }
}
