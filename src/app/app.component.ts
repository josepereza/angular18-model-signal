import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from "./components/padre/padre.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular18-input-output-search-2';
}
