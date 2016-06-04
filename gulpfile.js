// Generated by CoffeeScript 1.10.0
(function() {
  var connect, gulp, jade, sass;

  gulp = require('gulp');

  connect = require('gulp-connect');

  jade = require('gulp-jade');

  sass = require('gulp-sass');

  gulp.task('connect', function() {
    return connect.server({
      port: 1337,
      livereload: true,
      root: './dist'
    });
  });

  gulp.task('jade', function() {
    return gulp.src('jade/*.jade').pipe(jade({
      pretty: true
    })).pipe(gulp.dest('dist')).pipe(connect.reload());
  });

  gulp.task('sass', function() {
    return gulp.src('sass/*.sass').pipe(sass({
      outputStyle: 'expanded'
    })).pipe(gulp.dest('dist/css')).pipe(connect.reload());
  });

  gulp.task('watch', function() {
    gulp.watch('jade/*.jade', ['jade']);
    gulp.watch('sass/*.sass', ['sass']);
    return gulp.watch('js/*.js', ['sass']);
  });

  gulp.task('default', ['jade', 'watch', 'connect', 'sass']);

}).call(this);

//# sourceMappingURL=gulpfile.js.map
