import { Injectable } from '@angular/core';
import { ApiClient } from '../common/apiClient';
import { GetApiBaseUrl } from '../common/apiConstants';
import { ResourceList } from '../common/resourceList';
import { StationDetails } from './stationDetails';

@Injectable()
export class StationDetailsService {
	constructor(private apiClient: ApiClient) { }
	stationDetailsUrl = `${GetApiBaseUrl()}/stations/{stationId}/details`;

	getStationDetails(stationId: string): ResourceList<StationDetails> {
		return this.apiClient.getResourceList<StationDetails>(this.stationDetailsUrl.replace('{stationId}', stationId));
	}
}
