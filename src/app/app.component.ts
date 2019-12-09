import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { TrainService } from './services/trains/trainService';
import { Train } from './services/trains/train';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  isLoading = true;

  trains: Train[];

  constructor(@Inject(TrainService) private trainService: TrainService) {
    this.isLoading = true;
  }

  ngOnInit() {
    this.trains = this.trainService.getTrains();

    this.isLoading = false;
  }
}
