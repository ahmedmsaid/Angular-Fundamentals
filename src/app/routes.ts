import { Routes } from '@angular/router'
import { EventListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event.components'
import { Error404Component } from './errors/404.component'
import { EventRouteActivator } from './events/event-details/event-route-activator.service'
import { LoginComponent } from './user/login.component'
import { EditEventComponent } from './events/edit-event.component'



export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events/edit/:id', component: EditEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events', component: EventListComponent},
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    { 
        path: 'user',
        loadChildren: () => import ('./user/user.module')
        .then(m => m.UserModule)
    }
]