import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  burgerClicked:boolean =true;

  clickedOnBurger(){
    this.burgerClicked=!this.burgerClicked
  }
}
