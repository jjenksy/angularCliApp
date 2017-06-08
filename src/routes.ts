import {EventsListComponent} from './app/events/events-list.component';
import {EventDetailsComponentComponent} from './app/events/event-details-component/event-details-component.component';
import {Routes} from '@angular/router';
import {CreateEventsComponent} from './app/events/create-events/create-events.component';
import {Error404Component} from './app/errors/error-404/error-404.component';
import {EventRouteActivatorService} from './app/events/event-details-component/event-route-activator.service';

// define all my routes
export const appRoutes: Routes = [
  {path: 'events/new', component: CreateEventsComponent},
  {path: 'events', component: EventsListComponent},
  {path: 'events/:id', component: EventDetailsComponentComponent, canActivate: [EventRouteActivatorService]},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: '/events', pathMatch: 'full'}
];
