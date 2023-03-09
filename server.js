var https = require("https");
var express = require("express");
var app = express();
// listen for requests :)
const listener = app.listen(3000, function() {
  setInterval(() => {
    https.get("https://otaku-discord-bot.glitch.me");
  }, 4 * 60 * 1000);
  console.log("Your app is listening on port " + listener.address().port);
});
//В bot.js
const token = "NjA5NjIzMTM5NDIwMzQwMjI2.GFtFsS.14Axik0DO4w8ZkYb6rmOO8906zJUu5I_bXbYVE"; //Токен, сохраненный на 5-м шаге данного руководства
const Discord = require("discord.js");
const bot = new Discord.Client();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: "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"
});
const openai = new OpenAIApi(configuration);
async function ask(prompt) {
    const response = await openai.createCompletion({
        model: "text-davinci-002",
        prompt,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
const answer = response.data.choices[0].text;
console.log(answer);
}
//Пример вопроса: Как называются планеты Солнечной системы? 
ask("What are the names of the planets in the solar system?");

bot.login(token);