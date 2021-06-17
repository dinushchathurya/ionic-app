import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../data.service';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.page.html',
  styleUrls: ['./location-details.page.scss'],
})
export class LocationDetailsPage implements OnInit {

  public locations = [];
  selectedSize: number;
  selectedColor: number;
  activeVariation: string;
  title: any;

  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    private animatioCntrl: AnimationController,
  ) { }

  ngOnInit() {
    let locationId = this.route.snapshot.params.id;
    console.log('foo', locationId);
    // this.data.getLocations(id)
    //   .subscribe(response => {
    //     this.locations = response;
    // }); 
  }

  segmentChanged(e: any) {
    this.activeVariation = e.detail.value;

    if (this.activeVariation == 'color') {
      this.animatioCntrl.create()
        .addElement(document.querySelector('.sizes'))
        .duration(500)
        .iterations(1)
        .fromTo('transform', 'translateX(0px)', 'translateX(100%)')
        .fromTo('opacity', '1', '0.2')
        .play();

      this.animatioCntrl.create()
        .addElement(document.querySelector('.colors'))
        .duration(500)
        .iterations(1)
        .fromTo('transform', 'translateX(-100%)', 'translateX(0)')
        .fromTo('opacity', '0.2', '1')
        .play();
    } else {
      this.animatioCntrl.create()
        .addElement(document.querySelector('.sizes'))
        .duration(500)
        .iterations(1)
        .fromTo('transform', 'translateX(100%)', 'translateX(0)')
        .fromTo('opacity', '0.2', '1')
        .play();

      this.animatioCntrl.create()
        .addElement(document.querySelector('.colors'))
        .duration(500)
        .iterations(1)
        .fromTo('transform', 'translateX(0px)', 'translateX(-100%)')
        .fromTo('opacity', '1', '0.2')
        .play();
    }
  }
}
