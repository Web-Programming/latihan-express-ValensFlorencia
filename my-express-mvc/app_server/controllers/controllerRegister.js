const Register = require("../models/register");

const insert = (req, res, next) => {
    const registration = new Register({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    });
    registration
      .save()
      .then((result) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Registration Successful",
                data: result
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 400,
                success: true,
                message: "Eror Saving Registration Data"
            };
            res.status(400).json(responseMessage);
        });
};
module.exports = { insert };