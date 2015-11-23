const gulp = require('gulp');

// const gutil =  require('gulp-util');
// const plumber = require('gulp-plumber');
// const handleErrors = require('../util/handleErrors');
const config = require('../config');

gulp.task('watch', () => {
  gulp.watch(config.paths.script.watch, ['script']);
  gulp.watch(config.paths.style.watch, ['style']);
  gulp.watch(config.paths.html.watch, ['html']);
  gulp.watch(config.paths.test.watch, ['test']);
});
