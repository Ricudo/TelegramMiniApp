import { Telegraf, Markup } from "telegraf";
import { token, webAppUrl } from "./secrets.js";
import { message } from "telegraf/filters";

const bot = new Telegraf(token);

bot.command("start", (ctx) => {
  ctx.reply(
    "Welcome. Press button below to start the app.",
    Markup.keyboard([
      Markup.button.webApp("Send message", webAppUrl + "/feedback"),
    ])
  );
});

bot.on(
  message("web_app_data", async (ctx) => {
    const data = ctx.webAppData.data.json();
    ctx.reply(`Your feedback: ${data?.feedback} ?? 'empty message'`);
  })
);

bot.launch();
