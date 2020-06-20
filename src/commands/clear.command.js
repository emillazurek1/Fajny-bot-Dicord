const {
    Permissions: { FLAGS },
  } = require("discord.js")
  
  module.exports = {
    name: "clear",
    description: "Clear number of messages in specific channel.",
    args: true,
    usage: "<amount>",
    botPermissions: [FLAGS.MANAGE_MESSAGES],
    userPermissions: [FLAGS.ADMINISTRATOR],
  
    run(msg, args) {
      const { channel, guild, member } = msg
  
      const amountArg = parseInt(args[0])

      console.log(
        "bot",
         guild.me.permissionsIn(channel).has(["ADMINISTRATOR","MENAGE_MESSAGES"]),
      )
      console.log(
        "user",
        member.permissionsIn(channel).has(["ADMINISTRATOR","MENAGE_MESSAGES"]),
      )
         
      
  
      if (!Number.isInteger(amountArg)) {
        return channel.send("You must specify the amount of messages to clear!")
      }
  
      if (amountArg < 2 || amountArg >= 100) {
        return channel.send(
          "Amount of messages to clear must be greater than 2 and lower than 100.",
        )
      }
      channel.bulkDelete(amountArg)
    },
  }
  