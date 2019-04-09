import { Component, OnInit } from '@angular/core';
import Member from '../Member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-get-member',
  templateUrl: './get-member.component.html',
  styleUrls: ['./get-member.component.css']
})
export class GetMemberComponent implements OnInit {

  members: Member[];
  
  constructor(private am: MemberService) { }

  ngOnInit() {
    this.am
      .getMember()
      .subscribe((data: Member[]) => {
        this.members = data;
      });
  }

}
