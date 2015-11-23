// mochaでテスト, power-assert
// カバレッジ
// plato
// レポート
const gulp = require('gulp');

// const gutil =  require('gulp-util');
// const plumber = require('gulp-plumber');
const handleErrors = require('../util/handleErrors');
const config = require('../config');

const Server = require('karma').Server;

gulp.task('test', () => {
  const server = new Server({
    configFile: process.cwd() + '/karma.conf.js',
    singleRun: true,
  });
  server.start();
});
