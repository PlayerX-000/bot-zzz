const menu = (p, botName, emoji, emoji2, status, dev, pushname, base, baileys, sender) => {
  return `
                *${botName}* 
━━━━━━❯✷❮━━━━━━
┎┳━┅┅┄┈┄✧┈┈✦❖✦
┋┃${emoji} *Prefix:* 「 ${p} 」
┋┃${emoji} *Status:* ${status}
┋┃${emoji} *By:* ${dev} 
┋┃${emoji} *User:* ${pushname}
┋┃${emoji} *Base:* ${base}
┋┃${emoji} *Baileys:* ${baileys}
┋┖━┅┅┄┈┄✧┈┈✦❖✦
┋${"\u200B".repeat(4000)}
┖┳━┅┅┄┈┄✧┈┈✦❖✦
┎┫ *_《 DIVERSÃO 》_*
┋┣━━━━━━━
┋┃${emoji2} *${p}sticker*
┋┃> Faz fig marcando a img
┋┃${emoji2} *${p}rankgay*
┋┃> Ranking aleatório
┋┃${emoji2} *${p}rankcorno*
┋┃> Ranking aleatório
┋┃${emoji2} *${p}rankhetero*
┋┃> Ranking aleatório
┋┃${emoji2} *${p}dado*
┋┃> Comando de dado
┋┃${emoji2} *${p}cassino*
┋┃> Jogo do cassino
┋┖━┅┅┄┈┄✧┈┈✦❖✦
┋
┖┳━┅┅┄┈┄✧┈┈✦❖✦
┎┫ *_《 GRUPOS 》_*
┋┣━━━━━━━
┋┃${emoji2} *${p}marcar* (texto)
┋┃> Marca todos do grupo
┋┃${emoji2} *${p}promover* (@)
┋┃> Promove o membro a Adm
┋┃${emoji2} *${p}rebaixar* (@)
┋┃> Rebaixa a membro comum
┋┃${emoji2} *${p}add* (número)
┋┃> Adiciona ctt ao grupo
┋┃${emoji2} *${p}banir* (@)
┋┃> Bane a pessoa marcada
┋┖━┅┅┄┈┄✧┈┈✦❖✦
┋
┖┳━┅┅┄┈┄✧┈┈✦❖✦
┎┫ *_《 OUTROS 》_*
┋┣━━━━━━━
┋┃${emoji2} *${p}ping*
┋┃> Velocidade de resposta
┋┃${emoji2} *${p}dono*
┋┃> Dono do Bot
┋┃${emoji2} *${p}criador*
┋┃> Criador do Bot
┋┃${emoji2} *${p}tagme*
┋┃> Marca o usuário
┋┖━┅┅┄┈┄✧┈┈✦❖✦
┋
┖┳━┅┅┄┈┄✧┈┈✦❖✦
┎┫ *_《 DONO 》_*
┋┣━━━━━━━
┋┃${emoji2} *${p}adddono* (@)
┋┃> Adiciona o ctt como dono
┋┃${emoji2} *${p}deldono* (@)
┋┃> Remove o ctt como dono
┋┃${emoji2} *${p}addpremium* (@)
┋┃> O ctt vira premium no Bot
┋┃${emoji2} *${p}delpremium* (@)
┋┃> Remove o ctt de premium
┋┃${emoji2} *${p}donolist*
┋┃> Lista dos Donos
┋┃${emoji2} *${p}premiumlist*
┋┃> Lista dos Premiuns
┋┃${emoji2} *${p}execut (command)* 
┋┃> Execute code
┋┃${emoji2} *${p}reiniciar* 
┋┃> Reinicia o Bot
┖┻━┅┅┄┈┄✧┈┈✦❖✦`
}
exports.menu = menu