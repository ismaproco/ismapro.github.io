// Include gulp
var gulp = require('gulp');
 // Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var jshint = require('gulp-jshint');

gulp.task('scripts', function() {
    return gulp.src(['bower_components/jquery/dist/jquery.js',
        'bower_components/bootstrap-material-design/scripts/*.js'])
      .pipe(concat('libs.js'))
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
      .pipe(gulp.dest('build'));
});

var sass = require('gulp-ruby-sass');

gulp.task('css', function() {
    return gulp.src(['bower_components/bootstrap-material-design/dist/css/*.css'])
      .pipe(concat('external.css'))
      .pipe(cssmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('build'));
});

gulp.task('watch-libs', function() {
   // Watch .js files
  gulp.watch(['bower_components/jquery/dist/jquery.js',
        'bower_components/bootstrap-material-design/scripts/*.js'], ['scripts']);
   // Watch .scss files
  gulp.watch('bower_components/bootstrap-material-design/dist/css/*.css', ['css']);
});

gulp.task('watch', function() {
   // Watch .js files
  gulp.watch(['./js/*.js'], ['lint']);
   // Watch .scss files
  gulp.watch('bower_components/bootstrap-material-design/dist/css/*.css', ['css']);
});


gulp.task('lint', function() {
  return gulp.src('./js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});



// Default Task
gulp.task('build', ['scripts','css']);

// Build Task
gulp.task('default', ['watch-libs','watch','lint']);