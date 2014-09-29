Package.describe({
  summary: "Standarize alerts across your app",
  version: "0.0.2",
  git: "http://github.com/yogiben/meteor-alerts.git"
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
      'lib/client/alerts.coffee'

  	],
  	'client')

  api.export('Alert','client')

});