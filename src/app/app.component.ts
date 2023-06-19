import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NgSC';
  stepForm: string = '';
  isActive: boolean = false;
  onClick(step:string){
    this.stepForm = step;
  }


}
