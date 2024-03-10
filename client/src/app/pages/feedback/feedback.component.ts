import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TelegramService } from '../../_services/telegram.service';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css',
})
export class FeedbackComponent implements OnInit, OnDestroy {
  feedback = signal('');

  constructor(private _telegram: TelegramService) {}

  ngOnInit(): void {
    this._telegram.MainButton.setText('Send feedback');
    this._telegram.MainButton.hide();
    this._telegram.MainButton.onClick(this.submit.bind(this));
  }

  submit() {
    this._telegram.submit({ feedback: this.feedback() });
  }

  ngOnDestroy(): void {
    this._telegram.MainButton.offClick(this.submit.bind(this));
  }

  handleChange(event: string) {
    this.feedback.set(event);
    if (event.trim()) {
      this._telegram.MainButton.show();
    } else {
      this._telegram.MainButton.hide();
    }
  }
}
