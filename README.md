accounts-dropbox
================

Dropbox OAuth2 login service for use with Meteor Auth.

Exposes the `Meteor.loginWithDropbox` method on the client.
Works seamlessly with the Meteor Accounts system. See the
[Meteor accounts documentation](http://docs.meteor.com/#/basic/accounts)
for information about Meteor Accounts (including the usage of Atmosphere packages like this one).

### Usage

1. Add the package: ```meteor add nitrolabs:accounts-dropbox```
2. Read the 'Meteor.loginWith<ExternalService>' section of [Meteor auth documentation](http://docs.meteor.com/#/full/meteor_loginwithexternalservice) and make sure you set up your config and secret correctly.
3. Call ```Meteor.loginWithDropbox();```

The redirect URI must be set to '${yoursiteurl}/_oauth/dropbox?close=true'
Note the close=true url parameter.

### Package Dependencies

* accounts-base
* accounts-oauth
* dropbox-oauth

### Credits

Shamelessly based on [@yefim](https://github.com/yefim)'s LinkedIn OAuth2 service.<br>
Developed by @gcampax and @mathieudutour<br>
Maintained by [Nitrolabs](http://www.nitrolabs.com)

### Licence
MIT