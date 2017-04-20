"use strict";

let gulp = require('gulp');
let concatCss = require('gulp-concat-css');
let uglify = require('gulp-uglify');
let rename = require('gulp-rename');
let babel = require('gulp-babel');
// let sass = require('gulp-sass');

gulp.task('concatCss', function () {
  return gulp.src([
    'css/normalize.css',
    'css/main.css'])
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('css/'));
});

gulp.task('babelScripts', function () {
  return gulp.src('js/primary.js')
      .pipe(babel())
      .pipe(rename('primary.babel.js'))
      .pipe(gulp.dest('js/'));
});

gulp.task('minifyScripts', ['babelScripts'], function() {
  return gulp.src('js/primary.babel.js')
    .pipe(uglify())
    .pipe(rename('primary.min.js'))
    .pipe(gulp.dest('js/'));
});

// gulp.task('compileSass', function () {
//   return gulp.src('src/scss/application.scss')
//     .pipe(sass())
//     .pipe(gulp.dest('public/css'))
// })

gulp.task('build', ['concatCss', 'minifyScripts']);

gulp.task('default', ['build']);
