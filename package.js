Package.describe({
  summary: "Standarize alerts across your app",
  version: "0.0.3",
  git: "http://github.com/sorenriise/meteor-alerts.git"
});

both = ['client','server']

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.2');

  api.use(
  	[
  		'coffeescript',
  		'less',
      'templating',
      'mquandalle:jade@0.2.7',
      'raix:handlebar-helpers@0.1.2'
  	],
  	'client');

   api.addFiles(
  	[
  		'lib/client/templates.jade',
      'lib/client/templates.coffee',
      'lib/client/templates.less',

  	],
  	'client')

   api.addFiles(
  	[
      'lib/alerts.coffee'

  	],
  	both)

  api.export('Alert',both)

});
