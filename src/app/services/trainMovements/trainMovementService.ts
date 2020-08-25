import { Injectable } from '@angular/core';
import { TrainMovement } from './trainMovement';
import { ApiClient } from '../common/apiClient';
import { API_BASE_URL } from '../common/apiConstants';
import { ResourceList } from '../common/resourceList';

@Injectable()
export class TrainMovementService {
	constructor(private apiClient: ApiClient) { }
	trainMovementUrl = `${API_BASE_URL}/trains/{trainId}/movements`;

	getTrainMovements(trainId: string): ResourceList<TrainMovement> {
		return this.apiClient.getResourceList<TrainMovement>(this.trainMovementUrl.replace('{trainId}', trainId));
	}
}
