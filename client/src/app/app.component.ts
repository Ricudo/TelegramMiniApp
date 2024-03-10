import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TelegramService } from './_services/telegram.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private _telegram: TelegramService) {
    this._telegram.ready();
  }
}
