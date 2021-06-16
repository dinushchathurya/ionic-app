import { Injectable } from '@angular/core';

// Category Interface
export interface ILocation {
  id: number,
  name: string,
  description: string,
  image: string,
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getLocations() {
    let locations = [];

    let loc1: ILocation = {
      id: 1,
      name: 'Colombo',
      description: 'Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind',
      image: '../../assets/locations/location-1.png'
    }
    let loc2: ILocation = {
      id: 2,
      name: 'Kandy',
      description: 'Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind',
      image: '../../assets/locations/location-2.png'
    }
    let loc3: ILocation = {
      id: 3,
      name: 'Jaffna',
      description: 'Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind',
      image: '../../assets/locations/location-3.png'
    }
    let loc4: ILocation = {
      id: 4,
      name: 'Galle',
      description: 'Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind',
      image: '../../assets/locations/location-4.png'
    }
    let loc5: ILocation = {
      id: 5,
      name: 'Hikkaduwa',
      description: 'Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind',
      image: '../../assets/locations/location-5.png'
    }
    let loc6: ILocation = {
      id: 6,
      name: 'Nuwware-Eliya',
      description: 'Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you; it should change you. It leaves marks on your memory, on your consciousness, on your heart, and on your body. You take something with you. Hopefully, you leave something good behind',
      image: '../../assets/locations/location-6.png'
    }
    locations.push(loc1, loc2, loc3, loc4, loc5, loc6);

    return locations;
  }
}
