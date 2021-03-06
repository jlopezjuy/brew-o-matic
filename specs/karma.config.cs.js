// Karma configuration
// Generated on Thu Dec 05 2013 11:03:22 GMT+0100 (CET)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.3/angular.min.js',
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.3/angular-resource.min.js',
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.3/angular-route.min.js',
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.3/angular-animate.min.js',
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.3/angular-sanitize.min.js',
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.3/angular-mocks.js',
      'https://cdnjs.cloudflare.com/ajax/libs/socket.io/0.9.16/socket.io.min.js',
      '../public/js/index.js',
      '../public/js/RecipeCtrl.js',
      '../public/js/*.js',
      '../public/js/**/*.js',
      '../public/bower_components/angular/angular.min.js',
      '../public/bower_components/angular-audio/app/angular.audio.js',
      '../public/bower_components/angular-word-cloud/build/angular-word-cloud.min.js',
      '../public/bower_components/ng-util/dist/lautarobock-ng-util.min.js',
      '../public/bower_components/lodash/dist/lodash.core.min.js',
      '**/*Spec.js',
      '**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
        'lib/*.js',
        '../public/js/all.js',
        'lib/*.css'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};
