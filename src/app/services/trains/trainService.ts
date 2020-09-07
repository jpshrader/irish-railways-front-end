import { Injectable } from '@angular/core';
import { Train } from './Train';
import { ApiClient } from '../common/apiClient';
import { GetApiBaseUrl } from '../common/apiConstants';
import { ResourceList } from '../common/resourceList';

@Injectable()
export class TrainService {
	constructor(private apiClient: ApiClient) { }
	trainsUrl = `${GetApiBaseUrl()}/trains/`;

	getTrains(): ResourceList<Train> {
		return this.apiClient.getResourceList<Train>(this.trainsUrl);
	}
}
