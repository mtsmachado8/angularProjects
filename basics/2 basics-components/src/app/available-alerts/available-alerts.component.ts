import { Component, OnInit } from '@angular/core';

@Component({
    // selector: '[app-available-alerts]' inner attribute -> <div 'here'></div>,
    // selector: '.app-available-alerts'inner class -> <div class="here"></div>,
    selector: 'app-available-alerts',
    template: `
        <h4> Available Alerts: </h4>
        <app-sucess-alert></app-sucess-alert>
            <p> AND </p>
        <app-warning-alert></app-warning-alert>
    `,
    //templateUrl: './available-alerts.component.html',
    styleUrls: ['./available-alerts.component.css']
})

export class AvailableAlertsComponent implements OnInit{

    constructor() {}
    
    ngOnInit(){

    }
}