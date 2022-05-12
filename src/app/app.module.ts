import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { FieldsetModule } from "primeng/fieldset";
import { ButtonModule } from "primeng/button";
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from "primeng/inputtext";
import { ToolbarModule } from "primeng/toolbar";
import { TooltipModule } from "primeng/tooltip";
import { TableModule } from "primeng/table";
import { DialogModule } from 'primeng/dialog';
import { PanelModule } from "primeng/panel";
import { ListboxModule } from 'primeng/listbox';
import { DropdownModule } from 'primeng/dropdown';
import {OrderListModule} from 'primeng/orderlist';
import {PaginatorModule} from 'primeng/paginator';

import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { CharactersComponent } from './components/characters/characters.component';
import { HousesComponent } from './components/houses/houses.component';
import { LoginComponent } from './components/login/login.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { HouseDetailsComponent } from './components/house-details/house-details.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    CharactersComponent,
    HousesComponent,
    LoginComponent,
    ResourcesComponent,
    BookDetailsComponent,
    HouseDetailsComponent,
    CharacterDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FieldsetModule,
    ButtonModule,
    AccordionModule,
    FieldsetModule,
    ButtonModule,
    RadioButtonModule,
    InputTextModule,
    ToolbarModule,
    TooltipModule,
    TableModule,
    DialogModule,
    PanelModule,
    ListboxModule,
    DropdownModule,
    OrderListModule,
    PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
