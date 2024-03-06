import { Telegraf, Markup } from "telegraf";
import { token } from "./secrets.js";

const webAppUrl = "https://google.com";

const bot = new Telegraf(token);

bot.command("start", (ctx) => {
  ctx.reply(
    "Welcome. Press button below to start the app.",
    Markup.keyboard([Markup.button.webApp("Send message", webAppUrl)])
  );
});

bot.launch();
