import { Component, Input } from "@angular/core";

@Component({
    selector: 'collapsible-well',
    template: `
        <div (click)="toggleVisibility()" class="well pointable">
            <h4>
                <ng-content select="[well-title]"></ng-content>
            </h4>
            <ng-content *ngIf="visibile" select="[well-body]"></ng-content>
        </div>
    `
})

export class CollapsibleListComponent {
    @Input() title!: string
    visibile: boolean = false

    toggleVisibility() {
        this.visibile = !this.visibile
    }
}