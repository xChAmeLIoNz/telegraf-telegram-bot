//npm i telegraf --save
//const { Telegraf, Telegram } = require('telegraf');
const { Composer } = require('micro-bot');
const dotenv = require('dotenv');

dotenv.config();
//const bot = new Telegraf(process.env.TOKEN);
const bot = new Composer();


bot.command('start', (ctx) => {
    const user = ctx.message.chat.first_name;
    ctx.telegram.sendMessage(ctx.chat.id, `Benvenuto ${user}, seleziona quello che ti serve`,
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Programma", callback_data: "programma"}, {text: "Informazioni", callback_data: "informazioni"}]
            ]
        }
    });
});

bot.action('programma', (ctx) => {
    ctx.deleteMessage();
    ctx.reply("Ecco il link del programma\nhttps://docs.google.com/spreadsheets/d/1kOQY13lzyX8CF9iBRnAZGr8Xz3hUtca6PmQV0_ZUsfE/edit#gid=537086263");
});
bot.action('informazioni', (ctx) => {
    ctx.deleteMessage();
    ctx.reply("Bot creato in Nodejs da Alessandro Fogli Iseppe, utilizzando il framework telegraf.js [Deployed on Heroku]");
})

//bot.launch();
module.exports = bot;

