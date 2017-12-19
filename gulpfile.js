var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('watch', ['sass'], function() {

    browserSync.init({
        server: "."
    });

    gulp.watch('./scss/**/*.scss', ['sass'], browserSync.reload);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
   return gulp.src('./scss/**/*.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./css'))
   .pipe(browserSync.stream());
});

// default will also watch
gulp.task('default', ['watch']);
