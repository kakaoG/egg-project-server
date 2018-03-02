'use strict';

const Controller = require('egg').Controller;

class AccountController extends Controller {
  async index() {
    this.ctx.body = 'hi, Account';
  }
  async register() {
    this.ctx.body = await this.ctx.service.account.register(this.ctx.request.body);
  }
  async login() {
    this.ctx.body = await this.ctx.service.account.login(this.ctx.request.body);
  }
  async list() {
    this.ctx.body = await this.ctx.service.account.list(this.ctx.request.body);
  }
}

module.exports = AccountController;
