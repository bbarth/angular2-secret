import {Component} from "angular2/core";

@Component({
    template: `
        <h1>Data</h1>
        <p>{{ dataset }}</p>
        <button (click)="onGetData()">Get Data</button>
        <br>
        <button (click)="onDeleteData()">Delete all Data</button>
    `
})
// @CanActivate()
export class SuperSecretComponent {
    dataset: any;

    constructor () {}

    onGetData() {
    }

    onDeleteData() {
    }
}