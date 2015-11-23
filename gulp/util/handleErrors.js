const notify = require('gulp-notify');

module.exports = function() {
  // [MEMO] エラー発生にbeep音を出す。
  // require('gulp-util').beep();

  // gulpタスクを終了させる
  this.emit('end');

  // エラー通知
  notify.onError({
    title: 'Error',
    message: '<%= error.message %>',
  }).apply(this, Array.prototype.slice.call(arguments));
};
