import { TrainMovementService } from '../services/trainMovements/trainMovementService';
import { Train } from '../services/trains/train';

export interface TrainMovementComponentModel {
	train: Train;
	trainMovementService: TrainMovementService;
}
