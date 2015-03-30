'use strict';

module.exports = {
  assets: {
    enabled: true,
    globs: 'src/**/_assets/**'

  },
  beautify: {
    enabled: true,
    globs: [
      'src/**/*.js',
      'src/**/*.html',
      'gulp/**/*.js',
      'gulpfile.js',
      'karma.conf.js'
    ]
  },
  bower: {
    enabled: true
  },
  build: {
    enabled: true,
    sequence: [
      'clean', [
        'inject',
        'assets'
      ]
    ]
  },
  ci: {
    enabled: true,
    sequence: [
      [
        'beautify',
        'build',
        'test',
        'jshint'
      ]
    ]
  },
  clean: {
    enabled: true
  },
  css: {
    enabled: true,
    dependencies: ['bower']
  },
  default: {
    enabled: true,
    sequence: [
      'clean', [
        'inject',
        'assets',
        'jshint',
        'test'
      ],
      'webserver'
    ]
  },
  inject: {
    enabled: true,
    dependencies: ['js', 'css'],
    globs: 'src/index.html',
    injectablesGlobs: [
      'index*.js',
      'index*.css'
    ],
    absolute: true
  },
  js: {
    enabled: true,
    dependencies: ['bower'],
    devEntries: ['./src/dev/index.js'],
    distEntries: ['./src/index.js'],
    templatesGlobs: 'src/**/_templates/**',
    templatesModule: 'zk.templates'
  },
  jshint: {
    enabled: true,
    globs: [
      'gulpfile.js',
      'gulp/**/*.js',
      'src/**/*.js',
      'karma.conf.js'
    ]
  },
  test: {
    enabled: true,
    dependencies: ['bower'],
    files: ['src/unitTests.js'],
    templatesModule: 'zk.templates'
  },
  webserver: {
    enabled: true
  }
};
