var gulp = require('gulp');
var http = require('http');

var config = require('../config').watch;

gulp.task('watch', ['default','browsersync'], function () {
  gulp.watch(config.assetsSrc, ['assets']);
  gulp.watch(config.mediaSrc, ['media'])
  gulp.watch(config.pagesSrc, ['pages']);
  gulp.watch(config.blogSrc, ['posts', 'index', 'archive', 'tags', 'rss']);
  gulp.watch(config.partialsSrc, ['pages','posts', 'index', 'archive', 'tags', 'rss']);
});
