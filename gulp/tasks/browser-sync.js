var gulp        = require('gulp');
var browsersync = require('browser-sync');

var config = require('../config').browserSync;

gulp.task('browsersync', function() {
  browsersync(config);
});