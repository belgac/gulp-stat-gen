var gulp = require('gulp');

var config = require('../config').watch;

gulp.task('watch', ['default','browsersync'], function () {
  gulp.watch(config.assetsSrc, ['assets']);
  gulp.watch(config.mediaSrc, ['media']);
  gulp.watch(config.pagesSrc, ['pages']);
  gulp.watch(config.rssSrc, ['rss']);
  gulp.watch(config.blogSrc, ['blog']);
  gulp.watch(config.globalTemplatesSrc, ['pages','blog']);
});
