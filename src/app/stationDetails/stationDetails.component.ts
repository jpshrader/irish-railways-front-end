import { Component, Inject, OnInit } from '@angular/core';
import { ResourceList } from '../services/common/resourceList';
import { StationDetails } from '../services/stationDetails/stationDetails';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StationDetailsModel } from './stationDetailsModel';

@Component({
	selector: 'app-station-details-dialog',
	templateUrl: 'station-details-dialog.html',
})
export class StationDetailsComponent implements OnInit {
	stationDetails: ResourceList<StationDetails>;

	constructor(
		public dialogRef: MatDialogRef<StationDetailsModel>,
		@Inject(MAT_DIALOG_DATA) public componentData: StationDetailsModel) {}

	ngOnInit() {
		const { station, stationDetailsService } = this.componentData;
		this.stationDetails = stationDetailsService.getStationDetails(station.name);
	}
}
