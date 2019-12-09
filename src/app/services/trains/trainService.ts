import { Injectable } from '@angular/core';
import { Train } from './Train';
import { ApiClient } from '../common/apiClient';

@Injectable()
export class TrainService {
  constructor(private apiClient: ApiClient) { }
  trainsUrl = 'http://localhost:5000/api/trains/';

  getTrains(callback = null): Train[] {
    const trains = this.apiClient.getResourceList<Train>(this.trainsUrl);

    if (callback) {
      callback();
    }

    return trains;
  }
}
