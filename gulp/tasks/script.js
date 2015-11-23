const gulp = require('gulp');

// const gutil =  require('gulp-util');
const plumber = require('gulp-plumber');
const handleErrors = require('../util/handleErrors');
const config = require('../config');

const browserSync = require('browser-sync');
const jscs = require('gulp-jscs');
const eslint = require('gulp-eslint');

gulp.task('script', () => {
  gulp.src(config.paths.script.src)
    .pipe(plumber({
      errorHandler: handleErrors,
    }))

    // JSCSでコードフォーマットのチェック
    .pipe(jscs())
    .pipe(jscs.reporter())

    // ESLintでコード静的解析チェック
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(gulp.dest(`${config.rootDirs.tmp}/scripts`))
    .on('end', () => {
      browserSync.reload();
    });
});
