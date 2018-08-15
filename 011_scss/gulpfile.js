var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('myTask', function () {
    return gulp.src('source-files')
        .pipe(plugin())
        .pipe(gulp.dest('folder'))
})