var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function(callback) {
  runSequence(
    ['clean','bower'],
    'prepareTemplate',
    ['assets', 'media', 'pages', 'blog'],
    callback
  )
});
