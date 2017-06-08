/**
 * Created by johnjenkins on 6/7/17.
 */
import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-event-thumbnail',
  templateUrl: 'event-thumbnail.component.html',
  styleUrls: ['event-thumbnail.component.css']
})

export class EventThumbnailComponent {
  // declaring this to be an input param so we can pass an input from the dom
  @Input() event: any;
  // ouput to an event emmiter to pass data along to the event click
  // @Output() eventClick = new EventEmitter();


  /**
   * @onClick this method emits the event data
   */
  onclick() {

  }

  logFoo(id: number) {
    console.log(id);
  }

}
