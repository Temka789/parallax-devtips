gulp = require 'gulp'
connect = require 'gulp-connect'
jade = require 'gulp-jade'
sass = require 'gulp-sass'


gulp.task 'connect', ->
	connect.server
		port: 1337
		livereload: on
		root: './dist'

gulp.task 'jade', ->
		gulp.src 'jade/*.jade'
			.pipe jade {pretty: true}
			.pipe gulp.dest 'dist'
			.pipe do connect.reload

gulp.task 'sass', ->
		gulp.src 'sass/*.sass'
			.pipe sass {outputStyle: 'expanded'}
			.pipe gulp.dest 'dist/css'
			.pipe do connect.reload



gulp.task 'watch', ->
	gulp.watch 'jade/*.jade', ['jade']
	gulp.watch 'sass/*.sass', ['sass']
	gulp.watch 'js/*.js', ['sass']


gulp.task 'default', ['jade', 'watch', 'connect', 'sass']