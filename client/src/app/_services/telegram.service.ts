import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

interface TgButton {
  show(): void;
  hide(): void;
  setText(text: string): void;
  onClick(fn: Function): void;
  offClick(fn: Function): void;
  enable(): void;
  disable(): void;
}

@Injectable({
  providedIn: 'root',
})
export class TelegramService {
  private _window: Window & { Telegram: { WebApp: any } | null };
  tg: any;
  constructor(@Inject(DOCUMENT) private _document: Document) {
    this._window = _document.defaultView as any;
    this.tg = this._window.Telegram?.WebApp;
  }

  get MainButton(): TgButton {
    return this.tg.MainButton;
  }

  get BackButton(): TgButton {
    return this.tg.BackButton;
  }

  ready() {
    this.tg?.ready();
  }

  submit(data: object) {
    this.tg.sendData(JSON.stringify(data));
  }
}
