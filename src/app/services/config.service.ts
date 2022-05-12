import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config = "assets/config.json";
  backendurl = "https://anapioficeandfire.com/api/";
  authUrl = "";
  houselistUrl = "";
  
  constructor(public http: HttpClient) {
    console.log("cofnig service called");
    //this.initialize();
  }

  initialize() {
    return this.http.get(this.config)
      .toPromise()
      .then((conf: any) => {
        this.backendurl = conf.backend_server;
        this.authUrl = this.backendurl + conf.authenticate;
        this.houselistUrl = this.backendurl + conf.houses;

      })
  }


  getHeaders(){
    const token = 'Bearer '+localStorage.getItem('token');
    
    let httpOptions = {
    headers: new HttpHeaders({ 
      //"Authorization": localStorage.getItem('token'),
      'Content-Type': 'application/json',
      'Authorization': token
    })}
    return httpOptions;
  };

}
