module.exports = {
    logStart() {
        console.log('Bot has bee started.....');
    },

    getChatId(msg) {
        return msg.chat.id;
    },

    getItemUuid(source) {
        return source.substr(2, source.length);
    }
};