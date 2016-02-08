Package.describe({
    name: 'nitrolabs:accounts-dropbox',
    summary: "Accounts service for Dropbox",
    version: '1.2.2',
    git: 'https://github.com/NitroLabs/meteor-accounts-dropbox'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2');
    api.use('accounts-base', ['client', 'server']);

    api.imply('accounts-base', ['client', 'server']);
    api.use('accounts-oauth', ['client', 'server']);
    api.use('nitrolabs:dropbox-oauth@1.2.2', ['client', 'server']);

    api.addFiles('css/dropbox_login_button.css', 'client');
    api.addFiles('lib/dropbox.js', ['client', 'server']);
});

