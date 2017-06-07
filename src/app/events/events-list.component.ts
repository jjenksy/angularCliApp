import {Component} from '@angular/core';
/**
 * Created by johnjenkins on 6/7/17.
 */



@Component({
  selector: 'app-events-list', // selector is the html selector to reference
  templateUrl : 'events-list.component.html', // the template url
  styleUrls: ['events-list.component.css']
})
export class EventsListComponent {
  event1 = {
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
  };

  handleEventClicked(event) {
    console.log(event);
  }
}
