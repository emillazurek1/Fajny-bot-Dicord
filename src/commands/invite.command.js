const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "invite",
  description: "Display bot info.",

  run(msg, args) {
    const { channel } = msg

    const invite2 = "https://discord.com/api/oauth2/authorize?client_id=718571985113972777&permissions=8&scope=bot"
    const invite = "zaproszenie"
    
    const embed = new  MessageEmbed()
      // Set the title of the field
      .setTitle(invite)
      // Set the color of the embed
      .setColor(0xb348ff)
      // Set the main content of the embed
      .addField("zaproszenie",  invite2, true)

      channel.send(embed)
    },
  }
  