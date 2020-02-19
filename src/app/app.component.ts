import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { TrainService } from './services/trains/trainService';
import { Train } from './services/trains/train';
import { ResourceList } from './services/common/resourceList';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TrainMovementService } from './services/trainMovements/trainMovementService';
import { TrainMovement } from './services/trainMovements/trainMovement';

interface TrainMovementComponentModel {
	train: Train;
	trainMovementService: TrainMovementService;
}

@Component({
	selector: 'train-schedule-dialog',
	templateUrl: 'train-schedule-dialog.html',
})
export class TrainScheduleDialogComponent implements OnInit {
	CURRENT_STOPTYPE = 'Current';
	NEXT_STOPTYPE = 'Next';

	trainMovements: ResourceList<TrainMovement>;
	locationTypesToDisplay = ['O', 'D', 'S'];

	constructor(
		public dialogRef: MatDialogRef<TrainScheduleDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public componentData: TrainMovementComponentModel) {}

	ngOnInit() {
		const { train, trainMovementService } = this.componentData;
		this.trainMovements = trainMovementService.getTrainMovements(train.code);
	}

	getTrainMovements() {
		return this.trainMovements &&
			this.trainMovements.resources &&
			this.trainMovements.resources.filter(t => this.locationTypesToDisplay.includes(t.locationType));
	}

	getTrainStopColour(movement: TrainMovement) {
		if (movement.stopType === this.CURRENT_STOPTYPE && !movement.departure) {
			return 'accent';
		} else if (movement.stopType === this.NEXT_STOPTYPE && movement.arrival) {
			return 'primary';
		} else if (movement.stopType === this.NEXT_STOPTYPE && !movement.departure) {
			return 'accent';
		} else if (movement.departure) {
			return 'primary';
		} else {
			return '';
		}
	}

	getLocationIcon(trainMovement: TrainMovement) {
		if (trainMovement.stopType === this.CURRENT_STOPTYPE && !trainMovement.departure) {
			return 'train';
		} else if (trainMovement.stopType === this.NEXT_STOPTYPE && !trainMovement.departure) {
			return 'timer';
		} else if (trainMovement.departure) {
			return 'beenhere';
		} else {
			return 'more_vert';
		}
	}
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
	trains: ResourceList<Train>;

	constructor(
		@Inject(TrainService) private trainService: TrainService,
		@Inject(TrainMovementService) private trainMovementService: TrainMovementService,
		public dialog: MatDialog) {}

	ngOnInit() {
		this.trains = this.trainService.getTrains();
	}

	openScheduleDialog(train: Train) {
		const dialogRef = this.dialog.open(
			TrainScheduleDialogComponent,
			{
				data: {
					train,
					trainMovementService: this.trainMovementService
			}
		});

		dialogRef.afterClosed().subscribe(result => {});
	}

	getAbsoluteValue(value) {
		return Math.abs(value);
	}
}
