import { Component } from "@angular/core";

@Component({
    selector: 'event-list',
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr />
            <event-thumbnail [event]="event"></event-thumbnail>
        </div>
    `
})

export class EventListComponent {
    event = {
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrI:'/assets/images/angularconnect—shield.png' ,
        location: {
        address: '1057 DT',
        city: ' London',
        country: 'England'
        }
    }
}