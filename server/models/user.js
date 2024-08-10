"use strict";
const { Model } = require("sequelize");
const { all } = require("../routes");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isValidPassword(value) {
            // Check minimal length
            if (value.length < 8) {
              throw new Error("Password must be at least 8 characters long");
            }

            // Check alphanumeric
            if (!/[a-zA-Z]/.test(value) || !/[0-9]/.test(value)) {
              throw new Error("Password must be alphanumeric");
            }

            // Check for at least one uppercase letter
            if (!/[A-Z]/.test(value)) {
              throw new Error(
                "Password must contain at least one uppercase letter"
              );
            }

            // Check for at least one special character
            if (!/[!@#$%^&*()_+{}\[\]:;"\'<>,.?/~`|\\]/.test(value)) {
              throw new Error(
                "Password must contain at least one special character"
              );
            }
          },
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        defaultValue: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
