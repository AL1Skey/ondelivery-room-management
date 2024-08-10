'use strict';
const fs = require('fs');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
    */
   const data = JSON.parse(fs.readFileSync('./data/users.json', 'utf8'));

data.forEach((item)=>{
item.createdAt = new Date()

item.updatedAt = new Date()
}
)
   await queryInterface.bulkInsert('Users',data);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Users', null);
     */
    await queryInterface.bulkDelete('Users', null);
  }
};
