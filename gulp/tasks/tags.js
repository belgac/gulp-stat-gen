var gulp = require('gulp');
var tags = require ('../utils/tags');
var applyTemplate = require ('../utils/apply-template');

var config = require('../config').tags;

gulp.task('tags', function () {
    return tags()
        .pipe(applyTemplate(config.defaultTemplate))
        .pipe(gulp.dest(config.dest));
});
