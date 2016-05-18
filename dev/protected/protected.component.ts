import {Component, Injector, OnInit} from "angular2/core";
import {ControlGroup, FormBuilder, Validators} from "angular2/common";

@Component({
    template: `
        <form [ngFormModel]="myForm" (ngSubmit)="onSaveData()">
            <div class="input-group">
                <label for="title">Title</label>
                <input [ngFormControl]="myForm.find('title')" type="text" id="title" #title="ngForm">
            </div>
            <div class="input-group">
                <label for="content">Content</label>
                <input [ngFormControl]="myForm.find('content')" type="text" id="content">
            </div>
            <button type="submit" [disabled]="!myForm.valid">Add Data</button>
        </form>
    `,
})
export class ProtectedComponent implements OnInit {
    myForm: ControlGroup;

    constructor(private _fb: FormBuilder) {}

    onSaveData() {
    }

    ngOnInit():any {
        this.myForm = this._fb.group({
           title: ['', Validators.required],
           content: ['', Validators.required],
        });
    }
}