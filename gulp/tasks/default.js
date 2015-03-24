var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function(callback) {
  runSequence(
    'clean',
    ['assets', 'pages', 'media', 'posts', 'index', 'archive', 'tags', 'rss'],
    callback
  )
});
