'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingRooms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.BookingRooms.belongsTo(models.Rooms, {foreignKey:'roomid'});
      models.BookingRooms.belongsTo(models.User, {foreignKey:'userid'});
    }
  }
  BookingRooms.init({
    roomid: {
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'Rooms',
        key:'id'
      }
    },
    time: {
      type:DataTypes.DATE,
      allowNull:false
    },
    description: DataTypes.STRING,
    userid: {
      type:DataTypes.INTEGER,
      references:{
        model:'User',
        key:'id'
      }
    }
  }, {
    sequelize,
    modelName: 'BookingRooms',
  });
  return BookingRooms;
};