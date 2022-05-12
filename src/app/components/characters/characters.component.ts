import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Characters } from 'src/app/classes/characters';
import { AuthService } from 'src/app/services/auth.service';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
 
  constructor(public service: CharacterService, public authService: AuthService, public router: Router) { }

  character: Characters = new Characters();

  ngOnInit(): void {
  }

  goToDetailsView(item: any) {
    let characterid = item.url.split("/").pop();
    this.router.navigateByUrl("/characters/"+characterid);
    console.log('My character ID is ==> ', characterid);
  }


}
