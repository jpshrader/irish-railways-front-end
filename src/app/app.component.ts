import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { TrainService } from './services/trains/trainService';
import { Train } from './services/trains/train';
import { ResourceList } from './services/common/resourceList';
import { MatDialog } from '@angular/material/dialog';
import { TrainMovementService } from './services/trainMovements/trainMovementService';
import { StationService } from './services/stations/stationService';
import { Station } from './services/stations/station';
import { StationDetailsService } from './services/stationDetails/stationDetailsService';
import { StationDetailsComponent } from './stationDetails/stationDetails.component';
import { TrainScheduleDialogComponent } from './trainSchedule/trainScheduleDialog.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
	trains: ResourceList<Train>;
	stations: ResourceList<Station>;

	constructor(
		@Inject(TrainService) private trainService: TrainService,
		@Inject(TrainMovementService) private trainMovementService: TrainMovementService,
		@Inject(StationService) private stationService: StationService,
		@Inject(StationDetailsService) private stationDetailsService: StationDetailsService,
		public dialog: MatDialog) {}

	async ngOnInit() {
		Promise.all([
			this.trainService.getTrains(),
			this.stationService.getStations()
		]).then(values => {
			this.trains = values[0];
			this.stations = values[1];
		});
	}

	openScheduleDialog(train: Train) {
		this.dialog.open(
			TrainScheduleDialogComponent,
			{
				data: {
					train,
					trainMovementService: this.trainMovementService
				}
			}
		);
	}

	openStationDialog(station: Station) {
		this.dialog.open(
			StationDetailsComponent,
			{
				data: {
					station,
					stationDetailsService: this.stationDetailsService
			}
		});
	}

	getAbsoluteValue(value: number) {
		return Math.abs(value);
	}
}
