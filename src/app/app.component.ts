import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { RestService } from '../services/rest.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The OG Yelp API App';
  myForm: FormGroup;
  restaurants: any
  
  constructor(
    private fb: FormBuilder,
    private restService: RestService
  ){ }
  ngOnInit() {
    this.myForm = this.fb.group({
      cost: new FormControl(),
      zipcode: new FormControl(),
    })
    this.myForm.valueChanges.subscribe(console.log)
  }
  getRest(): void {
    this.restService.getRest(this.myForm.value.zipcode, this.myForm.value.cost).subscribe(data => this.restaurants = data )
  }
  
}
