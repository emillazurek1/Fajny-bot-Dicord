const {
    Permissions: { FLAGS },
  } = require("discord.js")
  
  module.exports = {
    name: "ban",
    description: "ban member ",
    args: true,
    usage: "<user> [reson]",
    botPermissions: [FLAGS.MANAGE_MESSAGES],
    userPermissions: [FLAGS.ADMINISTRATOR],
  
    run(msg, args) {
        const { channel, guild, author, mentions } = msg
    }
}