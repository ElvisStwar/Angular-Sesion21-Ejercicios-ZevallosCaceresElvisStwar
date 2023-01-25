import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [
    LoginComponent,
    PostComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
