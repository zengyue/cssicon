'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var watch = require('gulp-watch');


gulp.task('clean', function(){
  return gulp.src('dist/*',{read: false})
  .pipe(clean());
});

gulp.task('watch', function(){
  gulp.watch('src/**/*.less', ['less']);
});


gulp.task('less', function(){
  return gulp.src([
    'src/icons.less'
  ])
  .pipe(less())
  .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['clean'], function(){
  gulp.start('less');
});
