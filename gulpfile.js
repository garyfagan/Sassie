'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('auto-prefix', function () {
  var postcss      = require('gulp-postcss');
  var autoprefixer = require('autoprefixer');

  return gulp.src('./dist/*.css')
    .pipe(postcss([ autoprefixer() ]))
    .pipe(gulp.dest('./dist'));
});