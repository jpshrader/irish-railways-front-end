import { Injectable } from '@angular/core';
import { Train } from './Train';
import { ApiClient } from '../common/apiClient';
import { ResourceList } from '../common/resourceList';

@Injectable()
export class TrainService {
  constructor(private apiClient: ApiClient) { }
  trainsUrl = 'http://localhost:5000/api/trains/';

  getTrains(): ResourceList<Train> {
    return this.apiClient.getResourceList<Train>(this.trainsUrl);
  }
}
