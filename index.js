require("dotenv").config();
const discord = require("discord.js");
const random = require("./helper/random");
const scp = require("./scraping/index");
const scpEmbed = require("./helper/scp-embed");

(require("./helper/keepAlive.js"))()

const client = new discord.Client();

client.on("ready", () => {
  console.log("started.....  : ", client.user.tag);
});

client.on("message", async msg => {
  var command = {};
  if (msg.content.startsWith(process.env.PREFIX)) {
    command.base = msg.content.replace(process.env.PREFIX, "").split(" ")[0];
    command.args = msg.content
      .replace(process.env.PREFIX + command.base, "")
      .split(" ");
    command.args.shift();

    if (command.base === "preview") {
      msg.channel.send(
        scpEmbed(
          await scp(
            Number(command.args[0])
              ? Number(command.args[0])
              : msg.channel.send("Invalid scp number")
          )
        )
      );
      return;
    }

    if (command.base === "random") {
      let scpN = await retryRandom();

      msg.channel.send(scpEmbed(await scpN));
      return;
    }
  }
});

async function retryRandom() {
  var cont = true;
  while (cont) {
    let scpP = await scp(random(1, 10000));
    if (scpP.description != "not found") {
      cont = false;
      return scpP;
    }
  }
}

client.login(process.env.TOKEN);
