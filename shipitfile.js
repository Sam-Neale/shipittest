module.exports = function (shipit) {
    require('shipit-local')(shipit);

    shipit.initConfig({
        default: {
            deployTo: '/var/www',
            repositoryUrl: 'https://github.com/samneale/my-project.git'
        }
    });
};