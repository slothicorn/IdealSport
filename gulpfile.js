const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
sass.compiler = require('sass');
const pug = require('gulp-pug');
const watch = require('gulp-watch');

const bundleSass = () => {
    return gulp.src('./sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        errLogToConsole: true,
        outputStyle: 'compressed'
    })
    .on('error', console.error.bind(console)))
    .pipe(autoprefixer())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./'));
};

const bundlePug = () => {
    return gulp.src('./html/*.pug')
    .pipe(pug({
        pretty: true,
    }))
    .pipe(gulp.dest('./'));
}

const bundle = async () => {
    bundleSass();
    bundlePug();
}

exports.default = bundle;