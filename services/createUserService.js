/**
 * 
 * @param {function injection} param0 
 * @param {*} userName 
 * @param {*} password 
 * @returns 
 */
exports.createUserService = async ({ createUserDataAccess, sendEmail }, userName, password) => {

  const newUser = await createUserDataAccess(userName, password)

  await sendEmail({
    to: userName,
    subject: 'Welcome',
    body: 'Welcome to the show'
  })

  return newUser
}