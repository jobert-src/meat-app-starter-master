import { Component, OnInit } from '@angular/core';
import {RestaurantModel} from './restaurant/restaurant.model';
import {RestaurantService} from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
})

export class RestaurantsComponent implements OnInit {

  arRestaurants: RestaurantModel[];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getRestaurants()
      .subscribe(restaurants => this.arRestaurants = restaurants);
  }

}
