const gulp = require('gulp');

// const gutil =  require('gulp-util');
// const plumber = require('gulp-plumber');
// const handleErrors = require('../util/handleErrors');
// const config = require('../config');

const runSequence = require('run-sequence');

gulp.task('default', () => {
  runSequence(['build'], ['serve'], ['watch']);
});
