import { Injectable } from '@angular/core';
import { ApiClient } from '../common/apiClient';
import { API_BASE_URL } from '../common/apiConstants';
import { ResourceList } from '../common/resourceList';
import { Station } from './station';

@Injectable()
export class StationService {
	constructor(private apiClient: ApiClient) { }
	stationUrl = `${API_BASE_URL}/stations`;

	getStations(): ResourceList<Station> {
		return this.apiClient.getResourceList<Station>(this.stationUrl);
	}
}
