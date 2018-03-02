'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1519807477925_165';

  // add your config here
  config.middleware = [];

  config.mongoose = {
    url: 'mongodb://localhost:27017/egg',
    options: {}
  };

  config.security = {
    csrf: {
      ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
    },
    domainWhiteList: ['http://127.0.0.1:8080'],
  };

  return config;
};

