import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
import { Approute } from './app.router';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { GalleryComponent } from './gallery/gallery.component';
import { MenuComponent } from './menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { OnlineComponent } from './online/online.component';
import { WeddingComponent } from './wedding/wedding.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { CorporateComponent } from './corporate/corporate.component';
import { PersonalisedComponent } from './personalised/personalised.component';
import { BookComponent } from './book/book.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutComponent } from './about/about.component';
import { Login1Component } from './login1/login1.component';
import { Registration1Component } from './registration1/registration1.component';
import { Reservation1Component } from './reservation1/reservation1.component';
import { Book1Component } from './book1/book1.component';
import { SruthiComponent } from './sruthi/sruthi.component';
@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    DashboardComponent,
    RegistrationComponent,
    LoginComponent,
    MenuComponent,
    GalleryComponent,

    MenuComponent,

    ReservationComponent,

    OnlineComponent,

    WeddingComponent,

    BirthdayComponent,

    CorporateComponent,

    PersonalisedComponent,

    BookComponent,

    FeedbackComponent,

    AboutComponent,

    Login1Component,

    Registration1Component,

    Reservation1Component,

    Book1Component,

    SruthiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(Approute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
