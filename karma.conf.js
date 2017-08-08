import webpack from './webpack.config';

export default (config) => {
  config.set({
    webpack,
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'chai'],
    files: [
      { pattern: 'src/**/*Test.js*', watched: false },
    ],
    preprocessors: {
      'src/**/*Test.js*': ['webpack'],
    },
    reporters: ['nyan'],
  });
};
