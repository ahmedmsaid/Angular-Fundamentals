import { Component } from "@angular/core";
import { EventService } from "./shared/event.service";
import { IEvent } from "./shared/event.model";
import { Observable } from "rxjs";
import { ActivatedRoute, Route } from "@angular/router";

@Component({
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr />
            <div class="row">
                <div *ngFor="let event of events" class="col-md-5">
                    <event-thumbnail [event] = "event"></event-thumbnail>
                </div>
            </div>
        </div>
    `
})

export class EventListComponent {
    events!: IEvent[]

    constructor (private eventService: EventService, private route: ActivatedRoute) {}

    ngOnInit() {
      this.eventService.getEvents().subscribe(events => {this.events = events})
    }
}