const Service = require('egg').Service;

class AccountService extends Service {
  // 注册
  register(params) {
    this.ctx.model.Account.create(params);
    // const account = new this.ctx.model.Account(params);
    // await account.save();
    return true;
  }
  // 登录
  login(params) {
    const data = this.ctx.model.Account.find(params);
    this.ctx.cookies.set('token', 'gfgffggf');
    return data;
  }
  // list
  list(params) {
    return this.ctx.model.Account.find(params);
  }
}

module.exports = AccountService;