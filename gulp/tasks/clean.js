// distディレクトリのクリア
// Sassキャッシュの削除
// power-assertのtmp削除

const gulp = require('gulp');

// const gutil =  require('gulp-util');
// const plumber = require('gulp-plumber');
// const handleErrors = require('../util/handleErrors');
const config = require('../config');

const del = require('del');

gulp.task('clean', () => {
  del.sync([
    config.rootDirs.release,
    config.rootDirs.tmp,
  ]);
});
