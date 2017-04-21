import { Component } from '@angular/core';
import {MyHttpServiceService} from './my-http-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'app works!';
  constructor(){
    
  }
}
