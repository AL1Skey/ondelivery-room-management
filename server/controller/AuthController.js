const { User } = require("../models/index");
const { generateToken } = require("../tools/jwt");

class AuthController {
  static async register(req, res, next) {
    try {
      const body = req.body;
      const user = await User.create(body);
      res.status(200).json({ message: "User Has Been Created", body });
    } catch (error) {
      next(error);
    }
  }
  static async login(req, res, next) {
    try {
      if (!req.body.username || !req.body.password) {
        throw { msg: "Username and Password Required" };
      }

      const { username, password } = req.body;

      const user = await User.findOne({
        where: {
          username,
        },
      });
      if (!user) {
        throw { msg: "User Doesn't Exists" };
      } else {
        if (password === user.password) {
          const access_token = generateToken(
            { id: user.id },
            process.env.JWT_SECRET,
            3600
          );
          res.status(200).json({
            message: "Login Success",
            access_token,
            role: user.role,
            username: user.username,
            name: user.name,
            image: user.image,
          });
        } else {
          throw { msg: "Password Doesn't Match" };
        }
      }
    } catch (error) {
      next(error);
    }
  }

  static async forgotPassword(req, res, next) {
    try {
      if (!req.body.username) {
        throw { msg: "Username Required" };
      }
      const user = await User.findOne({
        where: {
          username: req.body.username,
        },
      });
      if (!user) {
        throw { msg: "User Doesn't Exists" };
      } else {
        res.status(200).json({ message: "Password reset email sent" });
      }
    } catch (error) {
      next(error);
    }
  }

  static async changePassword(req, res, next) {
    try {
      const password = req.body.password;
      const user = await User.update(
        {
          password,
        },
        {
          where: {
            username: req.user.username,
          },
        }
      );
      res.status(200).json({ message: "Password Has Been Updated" });
    } catch (error) {
      next(error);
    }
  }
  static async changeRole(req, res, next) {
    try {
      const role = req.body.role;
      const { id } = req.params;
      let user = await User.findOne({
        where: {
          id,
        },
      });
      if (!user) {
        throw { msg: "User Doesn't Exists" };
      }
      user = await User.update(
        {
          role,
        },
        {
          where: {
            id,
          },
        }
      );
      res.status(200).json({ message: "Role Has Been Updated" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthController;
