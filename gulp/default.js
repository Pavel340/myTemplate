// Task по умолчанию, сборка проекта, запуск сервера и отслеживание изменений файлов
var gulp = require('gulp');

gulp.task('default', ['build', 'webserver', 'watch']);
