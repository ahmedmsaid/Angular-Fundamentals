import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router"
import { ISession } from '../shared/event.model'

@Component({
    templateUrl: './create-session.component.html',
    styles: [`
        em { float: right; color: pink;}
        .error input, .error select, .error textarea { background-color: pink;}
        .error ::webkit-input-placeholder: {color: #pink;}
        .error :ms-input-placeholder { color: #pink;}
 `]
})

export class CreateSessionComponent {
    newSessionForm!: FormGroup
    name!: FormControl
    presenter!: FormControl
    duration!: FormControl
    level!: FormControl
    abstract!: FormControl

    constructor(private router: Router){}

    ngOnInit() {
        this.name = new FormControl('', Validators.required)
        this.presenter = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400)])

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }

    saveSession(formValues: any){
        let session: ISession = {
            id: undefined!,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        }
        console.log(session)
    }

    cancel(){
        this.router.navigate(['/events'])
    }
}