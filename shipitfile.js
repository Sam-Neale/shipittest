const path = require("path");

module.exports = function (shipit) {
    require('shipit-local')(shipit);

    shipit.initConfig({
        default: {
            deployTo: path.join(__dirname, '/../demo'),
            repositoryUrl: 'https://github.com/Sam-Neale/shipittest.git'
        }
    });
};