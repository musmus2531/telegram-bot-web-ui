const express = require('express');
const { Telegraf } = require('telegraf');

const app = express();
const bot = new Telegraf('YOUR_TELEGRAM_BOT_TOKEN');

// Middleware
app.use(express.json());

// Telegram bot command
bot.command('start', (ctx) => {
    ctx.reply('Welcome to the bot!');
});

// Start the bot
bot.launch();

// Express route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
