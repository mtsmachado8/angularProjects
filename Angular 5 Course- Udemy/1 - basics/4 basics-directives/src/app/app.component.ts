import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [/*`
    .moreThanFive {
      color: white;
    }
  `*/] // not needed, unless "color:" is commented on HTML 
})
export class AppComponent {
  isDisplaying = false;
  buttonClicks = [];

  toggleDisplay(){
    this.isDisplaying = !this.isDisplaying;
    this.buttonClicks.push(this.buttonClicks.length +1);
    //this.buttonClicks.push(new Date());
  }
}
