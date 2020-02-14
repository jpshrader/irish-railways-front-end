import { Component, Inject, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { TrainService } from './services/trains/trainService';
import { Train } from './services/trains/train';
import { ResourceList } from './services/common/resourceList';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
	animal: string;
	name: string;
}

@Component({
	selector: 'dialog-content-example-dialog',
	templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
	trains: ResourceList<Train>;

	constructor(@Inject(TrainService) private trainService: TrainService, public dialog: MatDialog) {}

	ngOnInit() {
		this.trains = this.trainService.getTrains();
	}

	openScheduleDialog(train: Train) {
		const dialogRef = this.dialog.open(DialogContentExampleDialog);

		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
		});
	}
}
