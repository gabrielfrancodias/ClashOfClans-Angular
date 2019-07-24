import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  loaded = false;
  userTag = '20GCJV2UQ';
  loading = false;
  constructor(private api: ApiService) { }
  user: any;
  //20GCJV2UQ
  ngOnInit() {
    this.getUserInfo();
  }

  getUserInfo(){
    this.loading = true;
    this.api.getUser(this.userTag).subscribe( ans => {
      this.user = ans;

      this.user.achievements.forEach(ach => {
        if(ach.stars > 0) {
          ach.filledStars = Array(ach.stars).fill('');
        } else {
          ach.filledStars = [];
        }
        if(ach.stars < 3){
          ach.emptyStars = Array(3 - ach.stars).fill('');
        } else {
          ach.emptyStars = [];
        }
      });

      this.loading = false;
      this.loaded = true;
      console.log(this.user);
    });
  }

}
