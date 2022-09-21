import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//element's name
  templateUrl: './app.component.html',//html content
  styleUrls: ['./app.component.css']//style content
})
export class AppComponent {
  title = 'Ashfaq eshopping';
  choice: string = "home";
  data: string = "This will show how to create custom pipe to alter the look";
}
