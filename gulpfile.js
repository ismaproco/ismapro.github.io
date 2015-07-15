// Include gulp
var gulp = require('gulp');
 // Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('scripts', function() {
    return gulp.src(['bower_components/jquery/dist/jquery.js',
        'bower_components/bootstrap-material-design/scripts/*.js'])
      .pipe(concat('libs.js'))
      .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
      .pipe(gulp.dest('js'));
});

var sass = require('gulp-ruby-sass');

gulp.task('css', function() {
    return gulp.src(['bower_components/bootstrap-material-design/dist/css/*.css'])
      .pipe(concat('external.css'))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
   // Watch .js files
  gulp.watch(['bower_components/jquery/dist/jquery.js',
        'bower_components/bootstrap-material-design/scripts/*.js'], ['scripts']);
   // Watch .scss files
  gulp.watch('bower_components/bootstrap-material-design/dist/css/*.css', ['css']);
});

// Default Task
gulp.task('default', ['scripts','css']);