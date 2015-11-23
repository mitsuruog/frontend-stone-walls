// htmllint
const gulp = require('gulp');

// const gutil =  require('gulp-util');
const plumber = require('gulp-plumber');
const handleErrors = require('../util/handleErrors');
const config = require('../config');

const browserSync = require('browser-sync');
const htmlhint = require('gulp-htmlhint');

gulp.task('html', () => {
  gulp.src(config.paths.html.src)
    .pipe(plumber({
      errorHandler: handleErrors,
    }))
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
    .pipe(htmlhint.failReporter())
    .pipe(gulp.dest(`${config.rootDirs.tmp}`))
    .on('end', () => {
      browserSync.reload();
    });
});
