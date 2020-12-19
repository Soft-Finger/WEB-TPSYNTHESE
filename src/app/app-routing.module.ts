import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulaireComponent } from './application/formulaire/formulaire.component';
import { HomeComponent } from './application/home/home.component';
import { Error404Component } from './application/error404/error404.component';
import { TutorielComponent } from './application/tutoriel/tutoriel.component';
import { ContactComponent } from './application/contact/contact.component';
import { FunComponent } from './application/fun/fun.component';
import { ReadComponent } from './application/crud/read/read.component';
import { TutorielsComponent } from './application/tutoriels/tutoriels.component';
import { ReactiveComponent } from './application/reactive/reactive.component';
import { UpdateComponent } from './application/crud/update/update.component';

const routes: Routes = [
  
  {path:'tutoriel', 
   children:[
     {path:':id', component: TutorielsComponent}
   ]},

   {path:'updateForm/:id', component: UpdateComponent},
   {path:'formulaire', component: ReactiveComponent},
   {path:'crud', component: ReadComponent},
   {path:'fun', component: FunComponent},
   {path:'contact', component: ContactComponent},
   {path:'home', component: HomeComponent},
   
   {path:'**', component:Error404Component},
   {path:'', redirectTo:'/home', pathMatch: 'full'},

];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }