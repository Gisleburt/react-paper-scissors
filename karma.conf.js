import webpack from './webpack.config';

export default (config) => {
  config.set({
    webpack,
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'chai'],
    files: [
      { pattern: 'src/**/*Test.jsx', watched: false },
    ],
    preprocessors: {
      'src/**/*Test.jsx': ['webpack'],
    },
    reporters: ['nyan'],
  });
};
