// CSSLint
// caniuse
// autoprefix

const gulp = require('gulp');

// const gutil =  require('gulp-util');
const plumber = require('gulp-plumber');
const handleErrors = require('../util/handleErrors');
const config = require('../config');

const postcss = require('gulp-postcss');
const browserSync = require('browser-sync');
const header = require('gulp-header');

const postCssPlugins = [
  require('doiuse')(config.doiuse.options),
  require('autoprefixer')(config.autoprefixer.options),
  require('stylelint')(config.stylelint.options),
  require('postcss-reporter')({
    clearMessages: true,
  }),
];

if (config.env !== 'dev') {
  // CSSのMinify&source maps出力
  postCssPlugins.push(require('csswring')(config.csswring.options));
}

gulp.task('style', () => {
  gulp.src(config.paths.style.src)
    .pipe(plumber({
      errorHandler: handleErrors,
    }))
    .pipe(postcss(postCssPlugins))

    // header
    .pipe(gulp.dest(`${config.rootDirs.tmp}/styles`))
    .pipe(browserSync.stream());
});
