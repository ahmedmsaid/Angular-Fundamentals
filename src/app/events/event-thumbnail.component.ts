import { Component, Input } from "@angular/core";
import { IEvent } from "./shared/event.model";

@Component({
    selector: 'event-thumbnail',
    template: `    
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event.name | uppercase}}</h2>
        <div>Date: {{event.date | date:'shortDate'}}</div>
        <div [ngSwitch]="event?.time">
            Time: {{event.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: \${{event.price}}</div>
        <div>
        <span>Location: {{event.location?.address}}</span>
        <span>&nbsp;</span>
        <span>{{event.location?.city}}, {{event.location?.country}}</span>
        </div>
    </div>`,
    styles:[`
            .thumbnail {min-height: 210px;}
            .well div {color: #bbb;}
        `
    ]
})

export class EventThumbnailComponent{
    @Input()
    event!: IEvent;
}