import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Houses } from 'src/app/classes/houses';
import { AuthService } from 'src/app/services/auth.service';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  constructor(public service: HouseService, public authService: AuthService, public router: Router) { }

  house: Houses = new Houses();

  ngOnInit(): void {
  }

  goToDetailsView(item: any) {
    let houseid = item.url.split("/").pop();
    this.router.navigateByUrl("/houses/"+houseid);
    console.log("My houseDetail API is >>> ", this.house.url);
  }

}
