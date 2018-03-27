// Отслеживание изменений в файлах
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    cfg = require('../package.json').config;

gulp.task('watch', function(){
    watch([cfg.watch.pug], function(event, cb) {
        gulp.start('html');
    });
    watch([cfg.watch.style], {readDelay: 1000}, function(event, cb) {
        gulp.start('style');
    });
    watch([cfg.watch.js], function(event, cb) {
        gulp.start('js');
    });
    watch([cfg.watch.img], function(event, cb) {
        gulp.start('image');
    });
    watch([cfg.watch.fonts], function(event, cb) {
        gulp.start('fonts');
    });
});
