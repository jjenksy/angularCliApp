import {Component, OnInit} from '@angular/core';
import {EventService} from './shared/event.service';
import {ToastrService} from '../common/toastr.service';
/**
 * Created by johnjenkins on 6/7/17.
 */



@Component({
  templateUrl : 'events-list.component.html', // the template url
  styleUrls: ['events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events: any;
  /**
   * Contructor to inject my services
   * @param eventService the eventService injected
   */
  constructor(private eventService: EventService, private toastr: ToastrService) {

  }

  // lifecycle hook that gets call at component load time
  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  handleEventClicked(event: any) {
    this.toastr.success(event);
  }
}
