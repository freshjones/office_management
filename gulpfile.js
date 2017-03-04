var gulp              = require('gulp');
var concat            = require("gulp-concat");
var uglify            = require('gulp-uglify');
var sass              = require('gulp-sass');
var ngHtml2Js         = require("gulp-ng-html2js");

var browserSync   = require('browser-sync').create();
var reload        = browserSync.reload;

var EXPRESS_PORT      = 4000;
var EXPRESS_ROOT      = __dirname;

// Let's make things more readable by
// encapsulating each part's setup
// in its own method
function startExpress() 
{
  var express = require('express');
  var app = express();
  app.use(express.static(EXPRESS_ROOT));
  app.listen(EXPRESS_PORT);
}

gulp.task('browsersync', function() {
    
    browserSync.init({
      server: {
            baseDir: "./"
        }
    });

});

gulp.task('js', function () 
{
  gulp.src('./app/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('js'));
});


gulp.task('js-vendor', function () 
{
  gulp.src([
      './node_modules/angular/angular.js',
      './node_modules/angular-ui-router/release/angular-ui-router.js'
    ])
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js'));
});



gulp.task('html', function () 
{
  return;
});

gulp.task('vendor', ['js-vendor']);

// Default task that will be run
// when no parameter is provided
// to gulp
gulp.task('default', ['browsersync','js'],function () {

  startExpress();
  gulp.watch('index.html').on('change', reload);
  gulp.watch(['./app/**/*.js'], ['js']).on('change', reload);

});