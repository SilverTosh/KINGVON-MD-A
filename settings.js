module.exports = {
  OWNER_NAME: 'KINGVON',
  OWNER_NUMBER: ['254720326316'],
  BOT_NAME: 'KINGVON-XMD',
  SUPPORT_CHANNEL: 'https://t.me/kingvon_support',
  PREFIXES: ['.', '#', '$', '&', '-', '+', '!', '*', '¶'],
  AUTO_BIO: true,
  STICKER_PACKNAME: 'KINGVON',
  STICKER_AUTHOR: 'KINGVON-XMD',
  VOICE_PING_RESPONSE: 'pong', // used to send a voice note reply
  MENU_TYPE: 'all commands',
  DASHBOARD_ENABLED: true,
  DASHBOARD_URL: 'https://kingvon-xmd-dashboard.vercel.app/',
  THUMBNAIL_URL: 'https://your-permanent-thumbnail-url.com/image.png', // replace with actual thumbnail
  GROUP_FEATURES: {
    ANTILINK: true,
    ANTIBADWORD: true,
    ENFORCEMENT: {
      DELETE: true,
      WARN: true,
      KICK: false, // can be changed by admin
    }
  },
  SPECIAL_COMMANDS: {
    ENABLED: true,
    OWNER_NUMBER: '254720326316',
    COMMANDS: ['danger', 'grandson']
  }
};
