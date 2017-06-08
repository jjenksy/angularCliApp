import { Component, OnInit } from '@angular/core';
import {EventService} from "../shared/event.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-event-details-component',
  templateUrl: './event-details-component.component.html',
  styleUrls: ['./event-details-component.component.css']
})
export class EventDetailsComponentComponent implements OnInit {

  event: any;

  /**
   * The constructor for dependency injection
   * @param eventService the eventService to get the event details from
   * @param route the Activated route to get the route param ID from
   */
  constructor(private eventService: EventService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    // make this.event equal to the return value from the getEvent method passing the route id
    this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
  }

}
