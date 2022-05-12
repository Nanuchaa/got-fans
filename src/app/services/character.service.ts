import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Characters } from '../classes/characters';
import { AuthService } from './auth.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  characterlist: Characters[] = [];
  character = new Characters();
  characterUrl = "https://anapioficeandfire.com/api/characters";

  constructor(public http: HttpClient, public confservice: ConfigService, public authService: AuthService) { 
    
    this.characterlist = [];
    this.confservice.initialize().then(() => {
      this.getCharacterlist();
    })
  }

  getCharacterlist() {  
    this.http.get(this.characterUrl, this.confservice.getHeaders())    
    .subscribe(
      (list: any) => {
        this.characterlist = list;
      },
      (err: Error) => {
        console.log('Error occurred while getting Books.', err);
        this.authService.logout();
      }) 
  }

  getCharacterByNumber(id: string) {
    this.http.get(this.characterUrl + "/" + id, this.confservice.getHeaders()).subscribe((char: any) => {
      this.character = char;
    })
  }

}
