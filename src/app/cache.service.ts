import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  private clanTag: '';
  private userTag: '';
  constructor() { }

  setUserTag(ut) {
    this.userTag = ut;
  }
  getUserTag() {
    return this.userTag;
  }

  setClanTag(ct) {
    this.clanTag = ct;
  }
  getClanTag() {
    return this.clanTag;
  }


}
