var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify',function(){// 1 task
    browserify('src/JS/main.js')
        .transform('reactify')//jsx cod to javascript
        .bundle()// putting code in one big file
        .pipe(source('main.js'))//tells the source file
        .pipe(gulp.dest('dist/js'))//put the file in dist.js
});

gulp.task('copy',function(){//2 task
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));//put the html file in dist.js
    gulp.src('src/css/*.*')
        .pipe(gulp.dest('dist/css'));//put the file in dist.js
    gulp.src('src/js/vendors/*.*')
        .pipe(gulp.dest('dist/js'));//put the bootstrap jquery  file in dist.js
});

gulp.task('default',['browserify','copy'],function(){
    return gulp.watch('src/**/*.*',['browserify','copy']);//continously watch src file and if any changes happen then show it in copy and dist file
});
