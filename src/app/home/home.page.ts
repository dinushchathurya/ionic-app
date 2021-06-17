import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public locations = [];
  public featuredDestinations = [];

  constructor(
    private data: DataService,
  ) { }

  ngOnInit() {
    this.locations = this.data.getLocations();
    this.featuredDestinations = this.data.getFeaturedDestinations();
  }

}
