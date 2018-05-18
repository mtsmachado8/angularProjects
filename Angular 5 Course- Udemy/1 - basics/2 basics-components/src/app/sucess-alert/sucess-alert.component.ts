import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-sucess-alert',
    templateUrl: './sucess-alert.component.html',
    styles:[`
        p {
            color: green;
            text-decoration: underline;
        }
    `]
    //styleUrls: ['./sucess-alert.component.css']
})
export class SucessAlertComponent implements OnInit{
    
    constructor(){}
    
    ngOnInit(): void {

    }

}