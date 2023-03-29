import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router"
import { ISession } from '../shared/event.model'

@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html',
    styles: [`
        em { float: right; color: pink;}
        .error input, .error select, .error textarea { background-color: pink;}
        .error ::webkit-input-placeholder: {color: #pink;}
        .error :ms-input-placeholder { color: #pink;}
 `]
})

export class CreateSessionComponent {
    @Output() saveNewSession = new EventEmitter()
    @Output() cancelAddSession = new EventEmitter()
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
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), this.restrictedwords(['a7a', '3el2', 'fck', 'fuck'])])

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }

    private restrictedwords(words: any){
        return (control: FormControl): {[key: string]: any} => {
            if (!words) return null!

            var invalidWords = words
            .map((w: any) => control.value.includes(w) ? w : null)
            .filter((w: any) => w != null)

            return invalidWords && invalidWords.length > 0
            ? {'restrictedWords': invalidWords.join('و ')}
            : null!
        }
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
        this.saveNewSession.emit(session)
    }

    cancel(){
        this.cancelAddSession.emit()
    }
    
}