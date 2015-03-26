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
        'templates',
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
        'templates',
        'assets',
        'jshint',
        'test'
      ],
      'webserver'
    ]
  },
  inject: {
    enabled: true,
    dependencies: ['js', 'css']
  },
  js: {
    enabled: true,
    dependencies: ['bower']
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
  templates: {
    enabled: true
  },
  test: {
    enabled: true,
    dependencies: ['bower']
  },
  webserver: {
    enabled: true
  }
};
