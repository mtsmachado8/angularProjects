import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username= 'Sou fera '+10;

  clearString(){
    this.username = '';
  }
}
