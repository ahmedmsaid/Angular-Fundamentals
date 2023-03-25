import { Component } from '@angular/core'
import { Form, FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: './profile.component.html',
  styles: [`
     em { float: right; color: red;}
    .error input { background-color: red;}
    .error ::webkit-input-placeholder: {color: #999;}
    .error :ms-input-placeholder { color: #999;}
  `]
})
export class ProfileComponent {
    profileForm!: FormGroup
    private firstName!: FormControl
    private lastName!: FormControl

    constructor(private auth: AuthService, private router: Router) {}

    ngOnInit(){
      this.firstName = new FormControl(this.auth.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')])
      this.lastName = new FormControl(this.auth.currentUser.lastName, Validators.required)
      
      this.profileForm = new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      })
    }

    validateFirstName(){
      return this.firstName.valid || this.firstName.untouched
    }

    validateLastName(){
      return this.lastName.valid || this.lastName.untouched
    }

    saveProfile(formValues: any) {
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName)
      this.router.navigate(['events'])
    }

    cancel() {
      this.router.navigate(['events'])
    }


}