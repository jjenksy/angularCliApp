import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EventsAppComponent} from './events/events-app.component';
import {EventsListComponent} from './events/events-list.component';
import {ButtonModule, InputTextModule, MegaMenuModule, PanelModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {EventThumbnailComponent} from './events/event-thumbnail.component';
import {NavBarComponent} from './nav/navBar.component';

@NgModule({
  // declare are components here
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    InputTextModule,
    ButtonModule,
    PanelModule,
    MegaMenuModule
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
