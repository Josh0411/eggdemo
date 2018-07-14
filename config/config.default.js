'use strict';

module.exports = appInfo => {

    // console.log(appInfo);

    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1530783342713_6336';

    // add your config here
    config.middleware = ['responsetime'];

    config.logger = {
        level: 'DEBUG',
    };

    return config;
};