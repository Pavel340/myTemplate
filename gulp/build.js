// Сборка всего проекта
var gulp = require('gulp'),
	runSequence = require('run-sequence');

gulp.task('build', function () {
	runSequence(
		'html',
		'js',
		'style',
		'fonts',
		'image'
	);
});
