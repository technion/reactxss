var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');

var eslint = require('gulp-eslint');

gulp.task('default', function () {
    return gulp.src('./*.jsx')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('all.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});

gulp.task('lint', function () {
    return gulp.src('./*.jsx')
        .pipe(eslint.failOnError())
});

