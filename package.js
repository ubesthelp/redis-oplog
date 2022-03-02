// eslint-disable-next-line
Package.describe({
  name: 'ubesthelp:redis-oplog',
  version: '2.0.16',
  // Brief, one-line summary of the package.
  summary: "Replacement for Meteor's MongoDB oplog implementation",
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ubesthelp/redis-oplog',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
})

// eslint-disable-next-line
Npm.depends({
  redis: '3.0.0'
})

// eslint-disable-next-line
Package.onUse(function(api) {
  api.use([
    'underscore',
    'ecmascript',
    'ejson',
    'minimongo',
    'mongo',
    'random',
    'ddp-server',
    'diff-sequence',
    'id-map',
    'mongo-id',
    'tracker'
  ])

  api.mainModule('redis-oplog.js', 'server');
  api.mainModule('redis-oplog.client.js', 'client');
})

// eslint-disable-next-line
Package.onTest(function(api) {
  api.use('ubesthelp:redis-oplog')

  // extensions
  api.use('aldeed:collection2@3.0.0')
  api.use('reywood:publish-composite@1.5.2')
  api.use('natestrauser:publish-performant-counts@0.1.2')
  api.use('socialize:user-presence@0.4.0')

  api.use('ecmascript')
  api.use('tracker')
  api.use('mongo')
  api.use('random')
  api.use('accounts-password')
  api.use('matb33:collection-hooks@0.8.4')
  api.use('alanning:roles@1.2.16')

  api.use(['meteortesting:mocha'])

  api.mainModule('testing/main.server.js', 'server')
  api.addFiles('testing/publishComposite/boot.js', 'server')
  api.addFiles('testing/optimistic-ui/boot.js', 'server')

  api.mainModule('testing/main.client.js', 'client')
})
