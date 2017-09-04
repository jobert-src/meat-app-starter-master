import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { RestaurantModel } from './restaurant/restaurant.model';

import {MEAT_API} from '../app.api';
import {ErrorHandler} from '../app.error-handler';

@Injectable()
export class RestaurantService {

  constructor(private http: Http) {};

  getRestaurants(): Observable<RestaurantModel[]> {
    return this.http.get(`${MEAT_API}/restaurantsSrvc`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }

  getRestaurantById(id: string): Observable<RestaurantModel> {
    return this.http.get(`${MEAT_API}/restaurantsSrvc/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError);
  }
}
