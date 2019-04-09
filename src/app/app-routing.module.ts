import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMemberComponent } from './add-member/add-member.component';
import { GetMemberComponent } from './get-member/get-member.component';
import { AddBookComponent } from './add-book/add-book.component';
import { GetBookComponent } from './get-book/get-book.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { ReturnBookComponent } from './return-book/return-book.component';

const routes: Routes = [
  {
    path: 'member/create',
    component: AddMemberComponent
  },
  {
    path: 'member',
    component: GetMemberComponent
  },
  {
    path: 'book/add',
    component: AddBookComponent
  },
  {
    path: 'book',
    component: GetBookComponent
  },
  {
    path: 'book/issue',
    component: IssueBookComponent
  },
  {
    path: 'book/return',
    component: ReturnBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
