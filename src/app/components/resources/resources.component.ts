import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  filterOptions: any;
  selectedfilter: any;

  constructor(public router: Router, public authService: AuthService) {

    this.filterOptions = [
      { name: 'Houses', code: 'houses' },
      { name: 'Books', code: 'books' },
      { name: 'Characters', code: 'characters' }
    ];
  }

  ngOnInit(): void {
  }

  goToResource(){
    console.log("the filter is ", this.selectedfilter)
    if(this.selectedfilter){
      this.router.navigateByUrl("/"+this.selectedfilter);
    }
  }

}
