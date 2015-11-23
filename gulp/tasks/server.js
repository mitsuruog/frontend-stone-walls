const gulp = require('gulp');

// const gutil =  require('gulp-util');
// const plumber = require('gulp-plumber');
// const handleErrors = require('../util/handleErrors');
const config = require('../config');

const browserSync = require('browser-sync');

gulp.task('serve', () => {
  browserSync.init(config.browserSync.options.serve);
});

gulp.task('serve:report', () => {
  browserSync.init(config.browserSync.options.report);
});
