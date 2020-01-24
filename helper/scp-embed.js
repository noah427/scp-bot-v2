const discord = require("discord.js");

module.exports = scp => {
  let embed = new discord.RichEmbed();

  embed.setTitle(scp.id);
  embed.setColor("GREEN");
  embed.addField("Class : ", scp.rank);
  embed.addField("Description : ", scp.description);
  embed.addField("Votes : ", scp.votes);
  embed.setFooter("Developed by [REDACTED]");
  return embed;
};
