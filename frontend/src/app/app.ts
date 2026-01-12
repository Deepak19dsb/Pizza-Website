import { Component, signal , inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Pizza } from './service/pizza';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  public data=inject(Pizza);
  protected readonly title = signal('Pizza');
}
