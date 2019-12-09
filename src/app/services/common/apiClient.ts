import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResourceList } from '../common/resourceList';

@Injectable()
export class ApiClient {
  constructor(private http: HttpClient) { }
  private requestHeaders = {
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Method': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept'
  };

  getResource<T>(url): T {
    let result: T;
    this.http.get<T>(url, { headers: this.requestHeaders })
      .subscribe(
        response => result = response,
        error => console.log(error)
      );

    return result;
  }

  getResourceList<T>(url): T[] {
    const result: T[] = [];
    this.http.get<ResourceList<T>>(url, { headers: this.requestHeaders })
      .subscribe(
        response => result.push(...response.resources),
        error => console.log(error)
      );

    return result;
  }
}
