import { Injectable } from '@angular/core';
import { ApiClient } from '../common/apiClient';
import { API_BASE_URL } from '../common/apiConstants';
import { ResourceList } from '../common/resourceList';
import { StationDetails } from './stationDetails';

@Injectable()
export class StationDetailsService {
	constructor(private apiClient: ApiClient) { }
	stationDetailsUrl = `${API_BASE_URL}/stations/{stationId}/details`;

	getStationDetails(stationId: string): ResourceList<StationDetails> {
		return this.apiClient.getResourceList<StationDetails>(this.stationDetailsUrl.replace('{stationId}', stationId));
	}
}
