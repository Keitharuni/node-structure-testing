const { createUserServices } = require('../services/createUserService');
const { createUserDataAccess } = require('../dataAccess/createUserDataAccess')
const { sendEmail } = require('../helpers/helperEmail')

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.createUserController = async (req, res) => {
  const { userName, password } = req.body;
  try {
    const newUser = await createUserServices({ createUserDataAccess, sendEmail }, userName, password)

    res.json(newUser)
  } catch (err) {
    res.status(500).json(err)
    console.log(err)
  }
}