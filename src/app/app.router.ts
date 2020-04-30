import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';
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
export const Approute:Routes=[
    {
    path:'',
    component:DashboardComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'registration',
        component:RegistrationComponent

    },
  
    {
        path:'gallery',
        component:GalleryComponent
    },
    {
        path:'menu',
        component:MenuComponent
    },
    {
        path:'reservation',
        component:ReservationComponent
    },
    {
        path:'online',
        component:OnlineComponent
    },
    {
        path:'wedding',
        component:WeddingComponent
    },
    {
        path:'birthday',
        component:BirthdayComponent
    },
    {
        path:'corporate',
        component:CorporateComponent
    },
    {
        path:'personalised',
        component:PersonalisedComponent
    },
    {
        path:'book',
        component:BookComponent
    },
    {
        path:'feedback',
        component:FeedbackComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'login1',
        component:Login1Component
    },
    {
        path:'registration1',
        component:Registration1Component
    },
    {
        path:'reservation1',
        component:Reservation1Component
    },
    {
        path:'book1',
        component:Book1Component
    },
]