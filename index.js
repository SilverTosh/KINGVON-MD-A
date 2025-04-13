const { default: makeWASocket, useSingleFileAuthState } = require("@adiwajshing/baileys");
const { Boom } = require("@hapi/boom");
const P = require("pino");
const fs = require("fs");
const { stickerMaker, downloader, autobio, bugMenu, reactToCommands, groupTools, vonSpecial } = require("./plugins");
const { connectToWhatsApp } = require("./lib/connection");

connectToWhatsApp();