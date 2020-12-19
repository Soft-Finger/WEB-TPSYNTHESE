import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormulaireComponent } from './application/formulaire/formulaire.component';
import { ContactComponent } from './application/contact/contact.component';
import { Error404Component } from './application/error404/error404.component';
import { FooterComponent } from './application/footer/footer.component';
import { NavbarComponent } from './application/navbar/navbar.component';
import { HomeComponent } from './application/home/home.component';
import { FunComponent } from './application/fun/fun.component';
import { DeleteComponent } from './application/crud/delete/delete.component';
import { CreateComponent } from './application/crud/create/create.component';
import { UpdateComponent } from './application/crud/update/update.component';
import { TutorielComponent } from './application/tutoriel/tutoriel.component';
import { TutorielsComponent } from './application/tutoriels/tutoriels.component';
import { ReadComponent } from './application/crud/read/read.component';
import { ReactiveComponent } from './application/reactive/reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    ContactComponent,
    Error404Component,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    FunComponent,
    DeleteComponent,
    CreateComponent,
    UpdateComponent,
    TutorielComponent,
    TutorielsComponent,
    ReadComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
