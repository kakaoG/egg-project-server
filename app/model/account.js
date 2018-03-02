module.exports = app => {
  const mongoose = app.mongoose;
  const AccountSchema = new mongoose.Schema({
    userName: String,
    password: String
  });
  return mongoose.model('account', AccountSchema);
};