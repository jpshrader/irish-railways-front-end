import { Injectable } from '@angular/core';
import { ApiClient } from '../common/apiClient';
import { ResourceList } from '../common/resourceList';
import { StationDetails } from './stationDetails';

@Injectable()
export class StationDetailsService {
	constructor(private apiClient: ApiClient) { }
	stationDetailsUrl = 'http://localhost:5000/api/stations/{stationId}/details';

	getStationDetails(stationId: string): ResourceList<StationDetails> {
		return this.apiClient.getResourceList<StationDetails>(this.stationDetailsUrl.replace('{stationId}', stationId));
	}
}
