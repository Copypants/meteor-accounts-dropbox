Package.describe({
  name: 'accounts-dropbox',
  summary: "Accounts service for Dropbox",
  version: '1.0.0',
  git: 'https://github.com/mathieudutour/meteor-accounts-dropbox'
});

Package.on_use(function (api) {
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('dropbox-oauth', ['client', 'server']);

  api.add_files(['dropbox_login_button.css'], 'client');

  api.add_files('dropbox.js', ['client', 'server']);
});

