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

  filterBases(){
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
    this.user.achievements.homeVillage = this.user.achievements.filter( ach => ach.village === 'home');
    this.user.achievements.builderBase = this.user.achievements.filter( ach => ach.village === 'builderBase');
    this.user.heroes.homeVillage = this.user.heroes.filter( her => her.village === 'home');
    this.user.heroes.builderBase = this.user.heroes.filter( her => her.village === 'builderBase');
    this.user.troops.homeVillage = this.user.troops.filter( tro => tro.village === 'home');
    this.user.troops.builderBase = this.user.troops.filter( tro => tro.village === 'builderBase');
    this.user.spells.homeVillage = this.user.spells.filter( spe => spe.village === 'home');
    this.user.spells.builderBase = this.user.spells.filter( spe => spe.village === 'builderBase');
    console.log(this.user);
  }

  getUserInfo(){
    this.loading = true;
    this.api.getUser(this.userTag).subscribe( ans => {
      this.user = ans;
      this.filterBases();
      this.loading = false;
      this.loaded = true;
      console.log(this.user);
    });
  }

}
