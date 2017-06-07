import {Component} from '@angular/core';
/**
 * Created by johnjenkins on 6/7/17.
 */



@Component({
  selector: 'app-events-list',
  templateUrl : 'events-list.component.html'
})
export class EventsListComponent {
  event = {
    id : 1,
    name : 'Johnson Macdanielson',
    date : '09/26/2078',
    time : '10:00 am',
    price: 599.99,
    location : {
      address: '1056 DT',
      city : 'Austin',
      country : 'USA'
    }
  }
}
