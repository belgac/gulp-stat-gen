var gulp = require('gulp');
var bower = require('gulp-bower');

var config = require('../../config').bower;

gulp.task('bower', function() {
    return bower({ cwd: 'theme' });     
});