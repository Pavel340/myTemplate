// Минимизация js файлов
var	gulp = require('gulp'),
	cfg = require('../package.json').config,
	rigger = require('gulp-rigger'),
	sourcemaps = require('gulp-sourcemaps'),
	uglify = require('gulp-uglify'),
	browserSync = require("browser-sync"),
	rename = require('gulp-rename'),
	babel = require("gulp-babel"),
	reload = browserSync.reload;

gulp.task('js', function () {
    gulp.src(cfg.src.js) //Найдем наш main файл
        .pipe(rigger()) //Прогоним через rigger
        .pipe(sourcemaps.init()) //Инициализируем sourcemap
		.pipe(babel())
        .pipe(uglify()) //Сожмем наш js
        .pipe(sourcemaps.write()) //Пропишем карты
        .pipe(rename({suffix: '.min', prefix : ''}))
        .pipe(gulp.dest(cfg.build.js)) //Выплюнем готовый файл в build
        .pipe(reload({stream: true})); //И перезагрузим сервер
});
