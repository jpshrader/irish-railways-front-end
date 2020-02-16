import { TrainMovement } from '../trainMovements/trainMovement';

export interface Train {
    code: string;
    status: string;
    latitude: string;
    longitude: string;
    date: string;
    origin: string;
    destination: string;
    message: string;
		direction: string;
		movements: TrainMovement[];
}
