import { Component } from "@angular/core";
import { ToastrService } from "../common/toastr.service";
import { EventService } from "./shared/event.service";
import { IEvent } from "./shared/event.model";

@Component({
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr />
            <div class="row">
                <div *ngFor="let event of events" class="col-md-5">
                    <event-thumbnail (click) = "handleThumbnailClick(event.name)" [event] = "event"></event-thumbnail>
                </div>
            </div>
        </div>
    `
})

export class EventListComponent {
    events: IEvent[] = []

    constructor (private eventService: EventService, private toastr: ToastrService) {}

    ngOnInit() {
      this.events = this.eventService.getEvents();
    }

    handleThumbnailClick(eventName: any) {
      this.toastr.success(eventName)
    }
}