import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router"

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em {float: right; color: red;}
    `]
})

export class LoginComponent {
    userName: any
    password: any
    loginInvalid = false

    constructor (private authService: AuthService, private router: Router){}

    login(formValue: any) {
        this.authService.loginUser(formValue.userName, formValue.password)
            .subscribe( res => {
                if(!res) {
                    this.loginInvalid = true
                } else {
                    this.router.navigate(['events'])
                }
            })
    }

    cancel() {
        this.router.navigate(['events'])
    }
}