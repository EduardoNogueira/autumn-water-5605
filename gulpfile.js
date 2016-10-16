var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('app/styles/scss/*.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('app/styles/css'))
});

gulp.task('watch', function() {
    gulp.watch('app/styles/scss/*.scss', ['sass']);
});
