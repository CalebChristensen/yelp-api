import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment.prod'

const APIKEY = environment.APIKEY

const httpOptions = {
  headers: new HttpHeaders({'Authorization': APIKEY, 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public http: HttpClient) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Origin', 'https://cors-anywhere.herokuapp.com/')
    headers = headers.append('Authorization', APIKEY);
    console.log('Hello YELP Provider');
   }

   getRest() {
     return this.http.get(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location=46038`, httpOptions)
   }
}
