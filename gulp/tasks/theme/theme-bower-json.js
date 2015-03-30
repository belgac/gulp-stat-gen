var gulp = require('gulp');
var jeditor = require("gulp-json-editor");

var config = require('../../config').themeBowerJson;

gulp.task('themeBowerJson', function() {
    gulp.src(config.baseBowerJson)
      .pipe(jeditor({
        'dependencies': config.actualTheme
      }))
      .pipe(gulp.dest(config.bowerThemeDest));
});