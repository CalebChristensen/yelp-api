import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RestService } from '../services/rest.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The OG Yelp API App';
  restaurants: any

  constructor(
    private restService: RestService
  ){ }
  ngOnInit() {
    return this.restService.getRest().subscribe(data => this.restaurants = data)
  }
}
