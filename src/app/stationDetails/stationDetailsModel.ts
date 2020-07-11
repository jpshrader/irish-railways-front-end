import { Station } from '../services/stations/station';
import { StationDetailsService } from '../services/stationDetails/stationDetailsService';

export interface StationDetailsModel {
	station: Station;
	stationDetailsService: StationDetailsService;
}
