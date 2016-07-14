var gulp = require('gulp')
var aigis = require('gulp-aigis')
var watch = require('gulp-watch')

gulp.task('aigis', function () {
  gulp.src('./gulp/styleguide_template/aigis_config.yml')
    .pipe(aigis())
})

gulp.task('watch', () => {
  return watch(['./src/scss/**'], function () {
    return gulp.start(['aigis'])
  })
})
