import { Injectable } from '@angular/core';
import { Train } from './Train';
import { ApiClient } from '../common/apiClient';
import { API_BASE_URL } from '../common/apiConstants';
import { ResourceList } from '../common/resourceList';

@Injectable()
export class TrainService {
	constructor(private apiClient: ApiClient) { }
	trainsUrl = `${API_BASE_URL}/trains/`;

	getTrains(): ResourceList<Train> {
		return this.apiClient.getResourceList<Train>(this.trainsUrl);
	}
}
