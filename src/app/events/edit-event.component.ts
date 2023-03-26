import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router"
import { EventService } from "./shared/event.service";

@Component({
    templateUrl: './edit-event.component.html'
})

export class EditEventComponent {
    event!: any
    isDirty: boolean = true
    
    constructor(private eventService: EventService, private router: Router, private route: ActivatedRoute){}

    ngOnInit(){
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
    }

    editEvent(formValues: any){
        this.isDirty = false
        this.router.navigate(['/events'])
    }

    cancel() {
        this.router.navigate(['/events'])
    }
}