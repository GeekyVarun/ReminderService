const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    EMAIL_ID: process.env.EMAIL_ID,
    EMAI_PASS: process.env.EMAI_PASS
};