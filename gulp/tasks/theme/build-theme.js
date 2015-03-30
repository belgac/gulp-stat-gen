var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('buildTheme', function(callback) {
  runSequence(
    'themeBowerJson',
    'bower',
    'mergeTheme',
    callback
  )
});
