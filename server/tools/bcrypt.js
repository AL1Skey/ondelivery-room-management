const bcrypt = require('bcrypt');

const generateHash = async (password) => {
    try {
        const saltRounds = 10;
        const hash = await bcrypt.hash(password, saltRounds);
        return hash;
    } catch (error) {
        console.error('Error generating bcrypt hash:', error);
        throw error;
    }
};

const comparePassword = async (password, hash) => {
    try {
        const isMatch = await bcrypt.compare(password, hash);
        return isMatch;
    } catch (error) {
        console.error('Error comparing password with bcrypt hash:', error);
        throw error;
    }
};

module.exports = {
    generateHash,
    comparePassword,
};