'use strict';

// had enabled by egg
// exports.static = true;
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

// 跨域配置
exports.cors = {
  enable: true,
  package: 'egg-cors',
};