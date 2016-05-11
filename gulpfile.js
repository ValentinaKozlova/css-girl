var gulp = require('gulp');
var less = require('gulp-less');
var watchLess = require('gulp-watch-less');

gulp.task('showIt', function() {
	return gulp.src('*.less')
	.pipe(less())
	.pipe(gulp.dest('./css'));
});

gulp.task('lessIt', function(){
	return gulp.src('*.less')
	.pipe(watchLess('*.less'))
	.pipe(less())
	.pipe(gulp.dest('./css'));
});