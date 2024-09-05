import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePgComponent } from './home-pg/home-pg.component';
import { AboutPgComponent } from './about-pg/about-pg.component';
import { BlogComponent } from './home-pg/blog/blog.component';
import { BlogsPgComponent } from './blogs-pg/blogs-pg.component';
import { SupportPgComponent } from './support-pg/support-pg.component';
import { SigninPgComponent } from './signin-pg/signin-pg.component';
import { ForgotpasswordPgComponent } from './forgotpassword-pg/forgotpassword-pg.component';

const routes: Routes = [
  {path:"",component:HomePgComponent},
  {path:"About",component:AboutPgComponent},
  {path:"Blogs",component:BlogsPgComponent},
  {path:"Support",component:SupportPgComponent},
  {path:"Sign-in",component:SigninPgComponent},
  {path:"ForgotPassword",component:ForgotpasswordPgComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
