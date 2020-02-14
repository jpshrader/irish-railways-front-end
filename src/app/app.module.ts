import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent, DialogContentExampleDialog } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrainService } from './services/trains/trainService';
import { ApiClient } from './services/common/apiClient';

import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
	declarations: [
		AppComponent,
		DialogContentExampleDialog
	],
	entryComponents: [
		DialogContentExampleDialog
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MatSliderModule,
		MatTabsModule,
		MatCardModule,
		MatButtonModule,
		MatTooltipModule,
		MatIconModule,
		MatExpansionModule,
		MatListModule,
		MatProgressSpinnerModule,
		MatDividerModule,
		MatTableModule,
		MatPaginatorModule,
		MatDialogModule
	],
	providers: [
		ApiClient,
		TrainService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
