var gulp = require('gulp');
var clean = require('gulp-rimraf');
var inject = require('gulp-inject');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var moduleImporter = require('sass-module-importer');

gulp.task('clean', function() {
  return gulp
    .src("./assets/js/vendor/*", { read: false })
    .pipe(clean());
});

gulp.task('copy-css-vendor', [ 'clean' ], function() {
  return gulp
    .src([
      './node_modules/peacock/styles/manni.css',
    ])
    .pipe(
      gulp.dest('./assets/css/vendor')
    );
});

gulp.task('copy-js-vendor', [ 'clean' ], function() {
  return gulp
    .src([
      './node_modules/bootstrap/node_modules/jquery/dist/jquery.min.js',
      './node_modules/tether/dist/js/tether.min.js',
      './node_modules/bootstrap/dist/js/bootstrap.min.js',
      './node_modules/jquery.easing/jquery.easing.min.js',
    ])
    .pipe(
      gulp.dest('./assets/js/vendor')
    );
});

gulp.task('inject-dependencies', [ 'copy-css-vendor', 'copy-js-vendor' ], function() {
  return gulp
    .src('./_includes/{head,scripts}.html')
    .pipe(
      inject(
        gulp.src(
          [
            './assets/css/vendor/*.css',
            './assets/js/vendor/jquery.min.js',
            './assets/js/vendor/tether.min.js',
            './assets/js/vendor/bootstrap.min.js',
            './assets/js/vendor/jquery.easing.min.js',
          ],
          {
            read: false
          }
        )
      )
    )
    .pipe(
      gulp.dest('./_includes/')
    );
});

gulp.task('build-css-sass', function() {
  return gulp.src(['./_sass/main.scss'])
    .pipe(sass({
      importer: moduleImporter()
    }).on('error', sass.logError))
    .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false,
		}))
    .pipe(cssmin())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task(
  'default', [
    'build-css-sass',
    'clean',
    'copy-css-vendor',
    'copy-js-vendor',
    'inject-dependencies',
  ]
);

// watch for file changes, then run tasks assigned
gulp.task('watch', function() {
  gulp.watch('./_sass/**/*.scss', ['build-css-sass']);
});
