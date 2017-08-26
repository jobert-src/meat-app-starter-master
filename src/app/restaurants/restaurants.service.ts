import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Restaurant } from './restaurant/restaurant.model';

import {MEAT_API} from '../app.api';

@Injectable()
export class RestaurantService {

  constructor(private http: Http) {};

  getRestaurants(): Observable<Restaurant[]> {
    //return this.arRestaurants;
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json());
  }

}
