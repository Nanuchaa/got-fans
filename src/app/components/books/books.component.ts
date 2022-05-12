import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Books } from 'src/app/classes/books';
import { AuthService } from 'src/app/services/auth.service';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(public service: BookService, public router: Router, public authService: AuthService) { }

  book: Books = new Books();

  ngOnInit(): void {
  }

  goToDetailsView(item: any) {
    let bookid = item.url.split("/").pop();
    this.router.navigateByUrl("/books/" + bookid);
  }


}
