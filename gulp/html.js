// Сборка html файлов и перенос в папку build
var gulp = require('gulp'),
	rigger = require('gulp-rigger'),
	cfg = require('../package.json').config,
	browserSync = require("browser-sync"),
	pug = require('gulp-pug'),
    reload = browserSync.reload;

gulp.task('html', function () {
	// gulp.src(cfg.src.html)
    gulp.src(cfg.src.pug) //Выберем файлы по нужному пути
        .pipe(rigger()) //Прогоним через rigger
        .pipe(pug({pretty: true})) // Преобразуем из pug в html. pretty - убирать отступы (false) или оставлять (true)
        .pipe(gulp.dest(cfg.build.html)) //Выплюнем их в папку build
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});
