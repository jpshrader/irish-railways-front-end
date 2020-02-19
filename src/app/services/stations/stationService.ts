import { Injectable } from '@angular/core';
import { ApiClient } from '../common/apiClient';
import { ResourceList } from '../common/resourceList';
import { Station } from './station';

@Injectable()
export class StationService {
	constructor(private apiClient: ApiClient) { }
	stationUrl = 'http://localhost:5000/api/stations';

	getStations(): ResourceList<Station> {
		return this.apiClient.getResourceList<Station>(this.stationUrl);
	}
}
