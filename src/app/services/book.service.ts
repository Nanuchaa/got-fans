import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Books } from '../classes/books';
import { AuthService } from './auth.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  booklist: Books[] = [];
  book = new Books();

  BOOK_URL = "https://anapioficeandfire.com/api/books";

  constructor(public http: HttpClient, public confservice: ConfigService, public authService: AuthService) {

    this.booklist = [];
    this.confservice.initialize().then(() => {
      this.getBooklist();
    })
  }

  getBooklist() {
    this.http.get(this.BOOK_URL, this.confservice.getHeaders())
      .subscribe(
        (list: any) => {
          this.booklist = list;
        },
        (err: Error) => {
          console.log('Error occurred while getting Books.', err);
          this.authService.logout();
        })
  }

  getBookByNumber(id: string) {
    this.http.get(this.BOOK_URL + "/" + id, this.confservice.getHeaders()).subscribe((books: any) => {
      this.book = books;
    })
  }

}
