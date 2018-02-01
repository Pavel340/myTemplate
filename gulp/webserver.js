// Запуск веб сервера
var gulp = require('gulp'),
	browserSync = require("browser-sync"),
	cfg = require('../package.json').configServer;



gulp.task('webserver', function () {
    browserSync(cfg);
});
