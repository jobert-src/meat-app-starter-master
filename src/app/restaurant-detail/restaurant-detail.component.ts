import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {RestaurantService} from '../restaurants/restaurants.service';
import {RestaurantModel} from '../restaurants/restaurant/restaurant.model';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})

export class RestaurantDetailComponent implements OnInit {

  restaurantModel: RestaurantModel;

  constructor(private restaurantService: RestaurantService,
              private route: ActivatedRoute ) { }

  ngOnInit() {
    this.restaurantService.getRestaurantById(this.route.snapshot.params['id'])
      .subscribe(restaurant => this.restaurantModel = restaurant);
  }

}
