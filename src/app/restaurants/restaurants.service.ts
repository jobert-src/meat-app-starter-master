import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { RestaurantModel } from './restaurant/restaurant.model';

import {MEAT_API} from '../app.api';

@Injectable()
export class RestaurantService {

  constructor(private http: Http) {};

  getRestaurants(): Observable<RestaurantModel[]> {
    //return this.arRestaurants;
    return this.http.get(`${MEAT_API}/restaurantsSrvc`)
      .map(response => response.json());
  }

}
