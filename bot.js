const Discord = require('discord.io');

const bot = new Discord.Client(({
    token: "TOKEN",
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
    mensagem1 = `Olá! Seja muito bem-vindo` + member.d.user.username;
    mensagem2 = `Você acaba de se juntar ao Servidor World of Darkness - BR`
    mensagem3 = `Você pode consultar as regras do Servidor no canal #regras.`
    mensagem4 = `Qualquer solicitação também pode ser feita através de uma mensagem, mencionando o grupo de Administradores, digitando @Administradores.`
    mensagem5 = `Esperamos que sua estada seja duradoura.`
    
    enviarMensagem(member.d.user.id, mensagem1);
    enviarMensagem(member.d.user.id, mensagem2);
    enviarMensagem(member.d.user.id, mensagem3);
    enviarMensagem(member.d.user.id, mensagem4);
    enviarMensagem(member.d.user.id, mensagem5);
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
                        `!teste1 = teste1 \r\n` +
                        `!teste2 = teste2`;
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
