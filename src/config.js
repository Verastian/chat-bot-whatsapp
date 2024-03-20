// config.js
module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || '127.0.0.1',
    PORT: process.env.PORT || 3000,
    TOKEN_WHATSAPP_API: process.env.TOKEN_WHATSAPP_API,
    APP_ID: process.env.APP_ID || 'v18.0',
    APP_VERSION: process.env.APP_VERSION,
}