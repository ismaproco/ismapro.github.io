// Include gulp
var gulp = require('gulp');
 // Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');
var jshint = require('gulp-jshint');
var sass = require('gulp-ruby-sass');
var imageop = require('gulp-image-optimization');


gulp.task('scripts', function() {
    return gulp.src(['bower_components/jquery/dist/jquery.js',
        'bower_components/material-design-lite/material.js',
        'bower_components/angular/angular.js'])
      .pipe(concat('libs.js'))
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
      .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
    return gulp.src(['bower_components/material-design-lite/material.min.css'])
      .pipe(concat('external.css'))
      .pipe(rename({suffix: '.min'}))
      .pipe(cssmin())
      .pipe(gulp.dest('dist'));
});
 
gulp.task('images', function(cb) {
    gulp.src(['images/**/*.png','images/**/*.jpg','images/**/*.gif','images/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('images')).on('end', cb).on('error', cb);
});

gulp.task('watch-libs', function() {
   // Watch .js files
  gulp.watch(['bower_components/jquery/dist/jquery.js',
        'bbower_components/material-design-lite/material.js'], ['scripts']);
   // Watch .scss files
  gulp.watch('bower_components/material-design-lite/material.min.css"', ['css']);
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
gulp.task('build', ['scripts','css','images']);

// Build Task
gulp.task('default', ['watch-libs','watch','lint']);