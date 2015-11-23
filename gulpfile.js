const requireDir = require('require-dir');

// ./gulp/tasks以下のタスクを一括ロードする
requireDir('./gulp/tasks', {
  recurse: true,
});
