import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksComponent } from './components/books/books.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharactersComponent } from './components/characters/characters.component';
import { HouseDetailsComponent } from './components/house-details/house-details.component';
import { HousesComponent } from './components/houses/houses.component';
import { LoginComponent } from './components/login/login.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { GuardService } from './services/guard.service';

 const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: "login", pathMatch: "full"},
  { path: 'id', canActivate:[GuardService], component: LoginComponent},

  { path: 'resources', component: ResourcesComponent},

  { path: 'books', component: BooksComponent},
  { path: 'houses', component: HousesComponent},
  { path: 'characters', component: CharactersComponent},

  { path: 'books/:id', component: BookDetailsComponent},
  { path: 'houses/:id', component: HouseDetailsComponent},
  { path: 'characters/:id', component: CharacterDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false,
    useHash: true,
  }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
