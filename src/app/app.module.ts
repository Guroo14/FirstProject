import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePgComponent } from './home-pg/home-pg.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BlogComponent } from './home-pg/blog/blog.component';
import { AboutPgComponent } from './about-pg/about-pg.component';
import { Main1Component } from './home-pg/main1/main1.component';
import { BlogsPgComponent } from './blogs-pg/blogs-pg.component';
import { SupportPgComponent } from './support-pg/support-pg.component';
import { FeaturesComponent } from './home-pg/features/features.component';
import { ReadyComponent } from './home-pg/ready/ready.component';
import { SponsorsComponent } from './home-pg/sponsors/sponsors.component';
import { StartupComponent } from './home-pg/startup/startup.component';
import { BugComponent } from './home-pg/bug/bug.component';
import { UsersComponent } from './home-pg/users/users.component';
import { PricingComponent } from './home-pg/pricing/pricing.component';
import { FormComponent } from './home-pg/form/form.component';
import { FooterComponent } from './footer/footer.component';
import { AboutHeaderComponent } from './about-pg/about-header/about-header.component';
import { AboutMain1Component } from './about-pg/about-main1/about-main1.component';
import { AboutMain2Component } from './about-pg/about-main2/about-main2.component';
import { BlogsHeaderComponent } from './blogs-pg/blogs-header/blogs-header.component';
import { BlogsMainComponent } from './blogs-pg/blogs-main/blogs-main.component';
import { SupportHeaderComponent } from './support-pg/support-header/support-header.component';
import { SigninPgComponent } from './signin-pg/signin-pg.component';
import { FormFillerComponent } from './signin-pg/form-filler/form-filler.component';
import { DataRendererComponent } from './signin-pg/data-renderer/data-renderer.component';
import { FormsModule } from '@angular/forms';
import { ForgotpasswordPgComponent } from './forgotpassword-pg/forgotpassword-pg.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePgComponent,
    NavBarComponent,
    BlogComponent,
    AboutPgComponent,
    Main1Component,
    BlogsPgComponent,
    SupportPgComponent,
    FeaturesComponent,
    ReadyComponent,
    SponsorsComponent,
    StartupComponent,
    BugComponent,
    UsersComponent,
    PricingComponent,
    FormComponent,
    FooterComponent,
    AboutHeaderComponent,
    AboutMain1Component,
    AboutMain2Component,
    BlogsHeaderComponent,
    BlogsMainComponent,
    SupportHeaderComponent,
    SigninPgComponent,
    FormFillerComponent,
    DataRendererComponent,
    ForgotpasswordPgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
