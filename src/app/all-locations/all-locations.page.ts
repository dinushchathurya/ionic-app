import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-all-locations',
  templateUrl: './all-locations.page.html',
  styleUrls: ['./all-locations.page.scss'],
})
export class AllLocationsPage implements OnInit {

  public locations = [];

  constructor(
    private data: DataService,
  ) { }

  ngOnInit() {
    this.locations = this.data.getLocations();
  }

}
