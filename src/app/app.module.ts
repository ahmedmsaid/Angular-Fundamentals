import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service'
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event.components';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEventComponent } from './events/edit-event.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';
import { SessionsListComponent } from './events/event-details/sessions-list.component';
import { CollapsibleListComponent } from './common/collapsible-well.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { jQ_TOKEN } from './common/jQuery.service';
import { SimpleModalCompnent } from './common/simple-modal.component';
import { ModalTriggerDirective } from './common/modal-trigger-directive';
import { UpVoteComponent } from './events/event-details/upvote.component';
import { VoterService } from './events/event-details/voter.service';
import { LocationValidator } from './events/event-details/validate-location.directive';
import { HttpClientModule } from '@angular/common/http'
import { EventListResolver } from './events/event-list-resolver-service';
import { EventResolver } from './events/event-resolver.service';

declare let toastr: Toastr
declare let jQuery: any

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionsListComponent,
    EditEventComponent,
    Error404Component,
    CollapsibleListComponent,
    SimpleModalCompnent,
    NavBarComponent,
    UpVoteComponent,
    ModalTriggerDirective,
    LocationValidator,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    EventListResolver,
    EventResolver,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide: jQ_TOKEN,
      useValue: jQuery
    },
    AuthService,
    VoterService,
    { 
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  
    return true
  
}
