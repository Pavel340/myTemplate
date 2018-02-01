// SASS в CSS, минимизация, добавление префиксов и перенос в build
var gulp = require('gulp'),
    cfg = require('../package.json').config,
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    prefixer = require('gulp-autoprefixer'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

gulp.task('style', function () {
    gulp.src(cfg.src.style) //Выберем наш main.sass
        .pipe(sourcemaps.init()) //То же самое что и с js
        .pipe(sass()) //Скомпилируем
        .pipe(prefixer()) //Добавим вендорные префиксы
        .pipe(cssmin()) //Сожмем
        .pipe(sourcemaps.write())
        .pipe(rename({suffix: '.min', prefix : ''}))
        .pipe(gulp.dest(cfg.build.css)) //И в build
        .pipe(reload({stream: true}));
});
