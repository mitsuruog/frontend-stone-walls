// プロジェクトのディレクトリ
const rootDirs = {
  // 静的リソースの
  src: './src',
  test: './test',
  task: './gulp',
  release: './dist',
  tmp: './.tmp',
  report: './report',
};

const supportBrowsers = [
  'last 3 version',
  'ie >= 9',
  'Android 4.0',
];

const paths = {
  html: {
    src: [
      `${rootDirs.src}/**/*.html`,
    ],
    watch: [
      `${rootDirs.src}/**/*.html`,
    ],
  },
  script: {
    src: [
      `${rootDirs.src}/scripts/**/*.js`,
    ],
    watch: [
      `${rootDirs.src}/scripts/**/*.js`,
    ],
  },
  style: {
    src: [
      `${rootDirs.src}/styles/**/*.css`,
    ],
    watch: [
      `${rootDirs.src}/styles/**/*.css`,
    ],
  },
  test: {
    src: [
      `${rootDirs.test}/**/*.js`,
    ],
    watch: [
      `${rootDirs.test}/**/*.js`,
    ],
  },
};

module.exports = {
  rootDirs: rootDirs,
  env: process.env.NODE_ENV || 'dev',
  paths: paths,

  /**
   * ここから下はGulpタスクの設定
   */

  browserSync: {
    options: {
      serve: {
        server: {
          baseDir: `${rootDirs.tmp}`,
          routes: {
            '/bower_components': 'bower_components',
          },
          port: 9000,
        },
      },
      report: {
        server: {
          baseDir: `${rootDirs.report}`,
          directory: true,
          port: 9001,
        },
      },
    },
  },
  autoprefixer: {
    options: {
      browsers: supportBrowsers,
    },
  },
  doiuse: {
    options: {
      browsers: supportBrowsers,
    },
  },
  stylelint: {
    options: {},
  },
  csswring: {
    options: {

      // https://github.com/hail2u/node-csswring#preservehacks
      preserveHacks: true,

      // https://github.com/hail2u/node-csswring#removeallcomments
      removeAllComments: true,
    },
  },
};
