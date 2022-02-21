const { resolve } = require('path');
const pkg = require('./package.json');
const child = require('../../common/settings/childapps.js');

const APP_NAME = pkg.name;
const appConfig = child.getAppConfig(APP_NAME, '', 'node');

module.exports = {
  outputDir: `dist${appConfig.baseurl}`,
  publicPath: appConfig.baseurl,
  devServer: {
    port: 8002,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve(__dirname, './src/'),
        '@root': resolve(__dirname, '../../'),
        '@common': resolve(__dirname, '../../common/'),
      },
    },
  },
};
