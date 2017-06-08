import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EventsAppComponent} from './events/events-app.component';
import {EventsListComponent} from './events/events-list.component';
import {ButtonModule, InputTextModule, MegaMenuModule, PanelModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {EventThumbnailComponent} from './events/event-thumbnail.component';
import {NavBarComponent} from './nav/navBar.component';
import {
  MaterialModule, MdButtonModule, MdCardModule, MdCheckboxModule, MdInputModule, MdMenuModule, MdNativeDateModule,
  MdToolbarModule
} from '@angular/material';
import {EventService} from './events/shared/event.service';
import {ToastrService} from './common/toastr.service';
import { EventDetailsComponentComponent } from './events/event-details-component/event-details-component.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from '../routes';
import { CreateEventsComponent } from './events/create-events/create-events.component';
import { Error404Component } from './errors/error-404/error-404.component';
import {EventRouteActivatorService} from './events/event-details-component/event-route-activator.service';

@NgModule({
  // declare are components here
  declarations: [ // declared component
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponentComponent,
    CreateEventsComponent,
    Error404Component
  ],
  imports: [ // third party imports
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    InputTextModule,
    ButtonModule,
    PanelModule,
    MegaMenuModule,
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdNativeDateModule,
    ReactiveFormsModule,
    MdMenuModule,
    RouterModule.forRoot(appRoutes), // import our routes into our app
    MdInputModule,
    MdCardModule
  ],
  providers: [EventService, ToastrService, EventRouteActivatorService], // providers for my services
  bootstrap: [EventsAppComponent] // main app entry point
})
export class AppModule { }
