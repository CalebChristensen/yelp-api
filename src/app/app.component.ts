import { Component } from '@angular/core';
import { FormControl,  FormGroup } from '@angular/forms';
import { RestService } from '../services/rest.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The OG Yelp API App';
  myForm= new FormGroup({
  cost: new FormControl(),
  zipcode: new FormControl(),
  })
  restaurants: any
  
  constructor(
    private restService: RestService
  ){ }
  delivery: string

  getRest() {
    this.restService.getRest(this.myForm.value.zipcode, this.myForm.value.cost).subscribe(data => {
    this.restaurants = data.businesses[Math.floor(Math.random()*data.businesses.length)]
    console.log(this.restaurants)
    let deliver = this.restaurants.transactions.indexOf('delivery')
        if(deliver > 0){
          this.delivery = "Pickup & Delivery!"
        } else {
          this.delivery = 'Pickup & Dine-In Only!'
        }
    return this.restaurants
  })}

  
  
}
