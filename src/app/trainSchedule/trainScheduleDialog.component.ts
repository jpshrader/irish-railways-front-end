import { Component, Inject, OnInit } from '@angular/core';
import { ResourceList } from '../services/common/resourceList';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TrainMovement } from '../services/trainMovements/trainMovement';
import { TrainMovementComponentModel } from './trainmovementComponentModel';

@Component({
	selector: 'app-train-schedule-dialog',
	templateUrl: 'train-schedule-dialog.html',
})
export class TrainScheduleDialogComponent implements OnInit {
	CURRENT_STOPTYPE = 'Current';
	NEXT_STOPTYPE = 'Next';

	trainMovements: ResourceList<TrainMovement>;
	locationTypesToDisplay = ['Origin', 'Destination', 'Stop'];

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
