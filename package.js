Package.describe({
    name: 'gcampax:accounts-dropbox',
    summary: "Accounts service for Dropbox",
    version: '1.0.0',
    git: 'https://github.com/gcampax/meteor-accounts-dropbox'

});

Package.onUse(function (api) {
    api.versionsFrom('0.9.4');
    api.use('accounts-base', ['client', 'server']);
    // Export Accounts (etc) to packages using this one.
    api.imply('accounts-base', ['client', 'server']);
    api.use('accounts-oauth', ['client', 'server']);
    api.use('gcampax:dropbox-oauth@1.0.0', ['client', 'server']);

    api.addFiles(['dropbox_login_button.css'], 'client');
    api.addFiles('dropbox.js', ['client', 'server']);
});

