import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Houses } from '../classes/houses';
import { AuthService } from './auth.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  houselist: Houses[] = [];
  house = new Houses();
  houseUrl = "https://anapioficeandfire.com/api/houses";

  constructor(public http: HttpClient, public confservice: ConfigService, public authService: AuthService) { 
    
    this.houselist = [];
    this.confservice.initialize().then(() => {
      this.getHouselist();
    })
  }

  getHouselist() {  
    this.http.get(this.houseUrl, this.confservice.getHeaders())    
    .subscribe(
      (list: any) => {
        this.houselist = list;
      },
      (err: Error) => {
        console.log('Error occurred while getting Houses.', err);
        this.authService.logout();
      }) 
  }

  getHouseByNumber(id: string) {
    this.http.get(this.houseUrl + "/" + id, this.confservice.getHeaders()).subscribe((house: any) => {
      this.house = house;
    })
  }

}
