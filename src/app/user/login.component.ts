import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router"

@Component({
    templateUrl: './login.component.html'
})

export class LoginComponent {
    userName: any
    password: any

    constructor (private authService: AuthService, private router: Router){}

    login(formValue: any) {
        this.authService.loginUser(formValue.userName, formValue.password)
        
        this.router.navigate(['events'])
    }

    cancel() {
        this.router.navigate(['events'])
    }
}