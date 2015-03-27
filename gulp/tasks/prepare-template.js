var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var rename = require('gulp-rename')
var config = require('../config').prepareTemplate;

gulp.task('prepareTemplate', function() {
      return gulp.src(mainBowerFiles({
        paths: {
          bowerDirectory: 'theme/bower_components',
          bowerJson: 'theme/bower.json'
         }
      }), { base: 'theme/bower_components' }) 
        .pipe(rename(function (path) {
          path.dirname = path.dirname.substring(path.dirname.indexOf('/')+1);
        }))
        .pipe(gulp.dest(config.dest));
});