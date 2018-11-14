import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment.prod'
import { Observable } from 'rxjs';

const APIKEY = environment.APIKEY

const httpOptions = {
  headers: new HttpHeaders({ 'Authorization': APIKEY, 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public http: HttpClient) { }

  getRest(zipcode, cost): Observable<any> {
    return this.http.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=${zipcode}&price=${cost}`, httpOptions)
  }
}
