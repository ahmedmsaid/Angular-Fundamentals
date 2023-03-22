import { CommonModule } from "@angular/common";
import { RouterModule} from '@angular/router'
import { NgModule } from "@angular/core";
import { userRoutes } from './user.routes';
import { ProfileComponent } from "./profile.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        ProfileComponent
    ],
    providers: [

    ]
})

export class UserModule {}