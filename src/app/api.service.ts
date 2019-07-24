import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: max-line-length
  // API_KEY = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjQ2YzEwNDU2LTY2ZTctNGFhYi1iYWFhLWFjZmI0ZTQ2ZWU5ZSIsImlhdCI6MTU2MzkxNzE2Nywic3ViIjoiZGV2ZWxvcGVyL2VkODY0OTkzLWY3N2QtNWUyNS1lZmQ3LTliNDgyMzNhNDM4OCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4Ny4xODEuMTExLjY3Il0sInR5cGUiOiJjbGllbnQifV19.9IokZqaZcmAwvGrwYYUcvdQ_tpXeuZltLiN8FbfnQ65GGxO_9s678O5JqWHHf4joISh_ve_L9WnOmFO2lEheLw';
  // tslint:disable-next-line: max-line-length
  API_KEY = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImQ5NWM0MjkyLWY3MzMtNDVmNi1hNmE4LTcyZWE3NTFjODgzYiIsImlhdCI6MTU2Mzk3MTcwOCwic3ViIjoiZGV2ZWxvcGVyL2VkODY0OTkzLWY3N2QtNWUyNS1lZmQ3LTliNDgyMzNhNDM4OCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE5MS41NC4xNzYuMjE4Il0sInR5cGUiOiJjbGllbnQifV19.QRCXbIkYL6Q3RAIUbj4KldflyeaAdI1j-7drbD9SC9gHolWtjOSfhA-qJXpXNb917eP7OxOTBD505Vhmkitjww';
  headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: this.API_KEY,
  });

  getUser(playerTag){
    const url = `http://localhost:4200/api/v1/players/%23${playerTag}`;
    const headersObject = new HttpHeaders().set('Authorization', this.API_KEY);
    return this.http.get(
      url,
      {
        headers: headersObject
      });
  }

  getClan(clanTag){
    const url = `http://localhost:4200/api/v1/clans/%23${clanTag}`;
    const headersObject = new HttpHeaders().set('Authorization', this.API_KEY);
    return this.http.get(
      url,
      {
        headers: headersObject
      }
    );
  }

  getLocations(){
    const url = `http://localhost:4200/api/v1/locations`;
    const headersObject = new HttpHeaders().set('Authorization', this.API_KEY);
    return this.http.get(
      url,
      {
        headers: headersObject
      }
    );
  }

}
