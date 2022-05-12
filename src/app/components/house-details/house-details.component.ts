import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent implements OnInit {

  constructor(public service: HouseService, public authService: AuthService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getHouseByNumber(id!);
  }

  getUrlBySwornMembers(swornMembersUrl: string) {
    const characterId = swornMembersUrl.split("/").pop();
    return "/characters/" + characterId;
  }

}
