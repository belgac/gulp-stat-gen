var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function(callback) {
  runSequence(
    'clean',
    'buildTheme',
    ['assets', 'media', 'pages', 'blog'],
    callback
  )
});
