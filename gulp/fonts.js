// Перенос шрифтов в папку build
var gulp = require('gulp'),
    cfg = require('../package.json').config;

gulp.task('fonts', function() {
    gulp.src(cfg.src.fonts)
        .pipe(gulp.dest(cfg.build.fonts));
});
