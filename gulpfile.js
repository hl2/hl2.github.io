var gulp = require('gulp');
var inject = require('gulp-inject');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var moduleImporter = require('sass-module-importer');

gulp.task('copy-css-vendor', function() {
  return gulp
    .src([
      './node_modules/animate.css/animate.min.css',
    ])
    .pipe(
      gulp.dest('./css/vendor')
    );
});

gulp.task('copy-js-vendor', function() {
  return gulp
    .src([
      './node_modules/jquery/dist/jquery.min.js',
      './node_modules/tether/dist/js/tether.min.js',
      './node_modules/bootstrap/dist/js/bootstrap.min.js',
      './node_modules/jquery.easing/jquery.easing.min.js',
      './node_modules/scrollreveal/dist/scrollreveal.min.js',
    ])
    .pipe(
      gulp.dest('./js/vendor')
    );
});

gulp.task('inject-dependencies', function() {
  return gulp
    .src('./_includes/{head,scripts}.html')
    .pipe(
      inject(
        gulp.src(
          [
            './css/vendor/animate.min.css',
            './js/vendor/jquery.min.js',
            './js/vendor/tether.min.js',
            './js/vendor/bootstrap.min.js',
            './js/vendor/jquery.easing.min.js',
            './js/vendor/scrollreveal.min.js',
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
  return gulp.src(['./sass/main.scss'])
    .pipe(sass({
      importer: moduleImporter()
    }).on('error', sass.logError))
    .pipe(cssmin())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest('./css/'));
});

gulp.task(
  'default', [
    'build-css-sass',
    'copy-css-vendor',
    'copy-js-vendor',
    'inject-dependencies',
  ]
);

// watch for file changes, then run tasks assigned
gulp.task('watch', function () {
    gulp.watch('./css/bootstrap/*.scss', ['build-css-sass']);
});
