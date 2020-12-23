const TelegramBot = require('node-telegram-bot-api')

const bot = new TelegramBot('1497942592:AAGGCk8NsRplgdylo_JuYcpxOHXMCRf2BoQ', { polling: true })

var translate = require('node-google-translate-skidz');

bot.on('message', msg => {
    translate({
        text: msg.text,
        source: 'uz',
        target: 'en'
    }, function (result) {
        bot.sendMessage(msg.chat.id, result.translation)

    });
})

bot.onText(/\/start/, msg => {
    var users_id = []
    users_id.push({
        id: msg.chat.id
    })
    console.log(users_id, msg.from.first_name)
})

var date = new Date()
var day = date.getSeconds()

if(day == 59){
console.log(day)
}