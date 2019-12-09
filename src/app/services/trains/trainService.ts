import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Train } from './Train';
import { ResourceList } from '../resourceList';

@Injectable()
export class TrainService {
  constructor(private http: HttpClient) { }

  requestHeaders = {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Method': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept'
  };
  trainsUrl = 'http://localhost:5000/api/trains/';

  getTrains(): Train[] {
    const trains: Train[] = [];
    this.http.get<ResourceList<Train>>(this.trainsUrl, { headers: this.requestHeaders })
      .subscribe(response => trains.push(...response.resources));

    return trains;
  }
}
