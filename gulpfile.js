const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('styles', function () {
  return gulp.src(['tailwind.css', 'bootstrap.css', 'normalize.css'])
    .pipe(concat('combined.css'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('styles'));
