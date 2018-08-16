const Discord = require('discord.io');

const bot = new Discord.Client(({
    token: "NDc5NjUxNTg5MTg4MjIyOTc4.DlcW3Q.xVt3SU2zxNufRFxsqoL2wR3Z7DA",
    autorun: true,
}));

/**
 * `<@` + userID + `>` Mention User
 * to: member.d.user.id Send message to user 
 */

bot.on('ready', (evt) => {
    console.log("Bot iniciado com sucesso!");
});

bot.on('guildMemberAdd', function (guild, member) {
    mensagem = `Seja muito bem-vindo ` + member.d.user.username;

    enviarMensagem(member.d.user.id, mensagem);
});

bot.on('message', (user, userID, channelID, message, evt) => {
    if (message.substring(0,1) == '!') {
        let args = message.substring(1).split(' ');
        const cmd = args[0];

        args = args.splice(1);

        let mensagem = null;
        switch (cmd) {
        case 'help':
            mensagem =  `Comandos: \r\n` +
                        `!afiliados = afiliados \r\n` +
                        `!suporte = suporte`;
            break;
        case 'afiliados':
            mensagem =  `Afiliados: \r\n` +
                        `texto`;
            break;
        case 'hello':
            mensagem = `Olá <@` + userID + `>`; 
            break;
        }

        if (mensagem) {
            enviarMensagem(channelID, mensagem);
        }
    }
});

const enviarMensagem = (destinatario, mensagem) => {
    bot.sendMessage({
        to: destinatario,
        message: mensagem
    });
}