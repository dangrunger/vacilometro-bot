const { Discord, Intents } = require("discord.js")
const dotenv = require("dotenv")

dotenv.config();

const client = new Discord.client({
    intents : [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});


client.login(process.env.TOKEN);

client.on("ready", () =>{
    console.log("Bot is ready!!!")
});


client.on("messageCreate", (msg) => {
    if (msg.content == "Hello"){
        msg.reply({
            content: "Funfando, ta?"
        });
    }
    if (msg.content == "Fumegando?") {
        msg.reply({
            content: "tamo ai paizao"
        });
    }
});
