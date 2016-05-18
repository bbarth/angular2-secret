import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, Router} from "angular2/router";

@Component({
    selector: 'my-header',
    template: `
        <header>
            <nav class="left">
                <ul>
                    <li><a [routerLink]="['Signup']">Sign Up</a></li>
                    <li><a [routerLink]="['Signin']">Sign In</a></li>
                    <li><a [routerLink]="['Protected']">Protected</a></li>
                    <li><a [routerLink]="['SuperSecret']">Super Secret</a></li>
                </ul>
            </nav>
            <nav class="right" *ngIf="isAuth()">
                <ul>
                    <li><a (click)="logout()">Logout</a></li>
                </ul>
            </nav>
        </header>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent {
    constructor() {}

    isAuth() {
    }

    logout() {
    }
}