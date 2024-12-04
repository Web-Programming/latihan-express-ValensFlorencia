const Register = require("../models/register");

const insert = (req, res, next) => {
    const registration = new Register({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
    });
    registration
      .save()
      .then((result) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Registration successful",
                data: result
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 400,
                success: true,
                message: "Eror saving registration data"
            };
            res.status(400).json(responseMessage);
        });
};

module.exports = { insert };
