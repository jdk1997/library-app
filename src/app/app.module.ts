import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddMemberComponent } from './add-member/add-member.component';
import { MemberService } from './member.service';
import { GetMemberComponent } from './get-member/get-member.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookService } from './book.service';
import { GetBookComponent } from './get-book/get-book.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { ReturnBookComponent } from './return-book/return-book.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMemberComponent,
    GetMemberComponent,
    AddBookComponent,
    GetBookComponent,
    IssueBookComponent,
    ReturnBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ 
    MemberService,
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
