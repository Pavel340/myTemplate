// Сборка html файлов и перенос в папку build
var gulp = require('gulp'),
	rigger = require('gulp-rigger'),
	cfg = require('../package.json').config,
	browserSync = require("browser-sync"),
	jade = require('gulp-jade'),
    reload = browserSync.reload;

gulp.task('html', function () {
	// gulp.src(cfg.src.html)
    gulp.src(cfg.src.jade) //Выберем файлы по нужному пути
        .pipe(rigger()) //Прогоним через rigger
        .pipe(jade({pretty: true})) // Преобразуем из jade в html. pretty - убирать отступы (false) или оставлять (true)
        .pipe(gulp.dest(cfg.build.html)) //Выплюнем их в папку build
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});
