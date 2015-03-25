var gulp = require('gulp');

var config = require('../config').prepareTemplate;

gulp.task('prepareTemplate', function() {
      return gulp.src(config.src)        
        .pipe(gulp.dest(config.dest));
});