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
   const data = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

data.forEach((item)=>{
item.createdAt = new Date()

item.updatedAt = new Date()
}
)
    await queryInterface.bulkInsert('Rooms', data, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Rooms', null, {});
     */
    await queryInterface.bulkDelete('Rooms', null, {});
  }
};
