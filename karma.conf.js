module.exports = function(config) {
  config.set({

    basePath: './',

    preprocessors: {
      'test/mocks/*.json': ['json_fixtures']
    },

    files: [
      'test/jquery.min.js',
      'test/jquery.mockjax.min.js',
      'test/mocha.js',
      'test/chai.js',
      'test/testPrep.js',
      'src/wkw.js',
      'test/mocks/*.json',
      'test/testUserinformation.js',
      'test/testStudyQueue.js',
      'test/testLevelProgression.js',
      'test/testSRSDistribution.js',
      'test/testCache.js',
      'test/testRecentUnlocks.js',
      'test/testCriticalItems.js',
      'test/testRadicals.js',
      'test/testKanji.js',
      'test/testVocabulary.js',
      'test/testGetAll.js',
      'test/testRateLimit.js',
      'test/testLocalStorage.js'
    ],

    autoWatch: true,

    frameworks: ['mocha', 'chai'],

    browsers: ['Chrome'],

    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-junit-reporter',
      'karma-json-fixtures-preprocessor'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    jsonFixturesPreprocessor: {
      // strip this from the file path \ fixture name 
      stripPrefix: 'test/fixtures',
      // strip this to the file path \ fixture name 
      // prependPrefix: 'mock/',
      // change the global fixtures variable name 
      variableName: '__mocks__',
      // camelize fixture filenames (e.g 'fixtures/aa-bb_cc.json' becames __fixtures__['fixtures/aaBbCc']) 
      camelizeFilenames: true,
      // transform the filename 
      transformPath: function(path) {
        return path + '.js';
      }
    }

  });
};