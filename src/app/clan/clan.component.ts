import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CacheService } from '../cache.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clan',
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.scss']
})
export class ClanComponent implements OnInit {

  loading = false;
  loaded = false;
  clanTag = '';
  clan: any;
  constructor(
    private api: ApiService,
    private cache: CacheService,
    public router: Router
  ) { }
  ngOnInit() {
    this.clanTag = this.cache.getClanTag();
    this.cache.setClanTag('');
    if(this.clanTag){
      this.clanTag = this.clanTag.substring(1);
      this.getClanInfo();
    }
  }

  getClanInfo() {
    this.loading = true;
    this.api.getClan(this.clanTag).subscribe(
      ans => {
        this.clan = ans;
        this.loading = false;
        this.loaded = true;
        this.clan.memberList.forEach(member => {
          switch(member.role) {
            case 'leader':
              member.role = 'Líder';
              break;
            case 'coLeader':
              member.role = 'Colíder';
              break;
            case 'admin':
              member.role = 'Ancião';
              break;
            case 'member':
              member.role = 'Membro';
              break;
          }
        });
        console.log(this.clan)
      }, err => {
        console.log(err);
      }
    );
  }

  navigateToUser(userTag){
    this.cache.setUserTag(userTag);
    this.router.navigateByUrl('/user');
  }

}
