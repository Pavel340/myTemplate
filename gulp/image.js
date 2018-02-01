// Минимизация картинок и перенос в папку build
var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    cfg = require('../package.json').config,
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

gulp.task('image', function () {
    gulp.src(cfg.src.img) //Выберем наши картинки
        .pipe(imagemin({ //Сожмем их
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(cfg.build.img)) //И бросим в build
        .pipe(reload({stream: true}));
});
