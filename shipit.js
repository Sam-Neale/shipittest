module.exports = shipit => {
    // Load shipit-deploy tasks
    require('shipit-deploy')(shipit)

    shipit.initConfig({
        default: {
            deployTo: '~/demo',
            repositoryUrl: 'https://github.com/samneale/my-project.git',
        },
        staging: {
            servers: 'deploy@staging.my-project.com',
        },
    })
}