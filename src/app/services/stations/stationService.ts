import { Injectable } from '@angular/core';
import { ApiClient } from '../common/apiClient';
import { GetApiBaseUrl } from '../common/apiConstants';
import { ResourceList } from '../common/resourceList';
import { Station } from './station';

@Injectable()
export class StationService {
	constructor(private apiClient: ApiClient) { }
	stationUrl = `${GetApiBaseUrl()}/stations`;

	getStations(): ResourceList<Station> {
		return this.apiClient.getResourceList<Station>(this.stationUrl);
	}
}
