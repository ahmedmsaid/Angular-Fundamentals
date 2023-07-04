import { Routes } from '@angular/router'
import { EventListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event.components'
import { Error404Component } from './errors/404.component'
import { LoginComponent } from './user/login.component'
import { EditEventComponent } from './events/edit-event.component'
import { CreateSessionComponent } from './events/event-details/create-session.component'
import { EventListResolver } from './events/event-list-resolver-service'
import { EventResolver } from './events/event-resolver.service'



export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events/edit/:id', component: EditEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events/session/new', component: CreateSessionComponent},
    { path: 'events', component: EventListComponent, resolve: {events: EventListResolver}},
    { path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver}},
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { 
        path: 'user',
        loadChildren: () => import ('./user/user.module')
        .then(m => m.UserModule)
    }
]