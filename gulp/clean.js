// Очистка проекта, удаление папки build
var gulp = require('gulp'),
	rimraf = require('rimraf'),
	cfg = require('../package.json').config;

gulp.task('clean', function (cb) {
    rimraf(cfg.clean, cb);
});
