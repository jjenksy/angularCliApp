import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EventsAppComponent} from './events/events-app.component';
import {EventsListComponent} from './events/events-list.component';

@NgModule({
  // declare are components here
  declarations: [
    EventsAppComponent,
    EventsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
