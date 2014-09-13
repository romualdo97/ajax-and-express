var gulp = require('gulp');

// Plugins
var jshint = require('gulp-jshint');

gulp.task('jshint', function(){
	gulp.src(['./routes/**/*.js', 'app.js', 'gulpfile.js'])
		.pipe( jshint() )
		.pipe( jshint.reporter('default') );
});
gulp.watch(['./routes/**/*.js', 'app.js', 'gulpfile.js'], function(){
	gulp.run('jshint');
});