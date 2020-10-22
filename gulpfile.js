var gulp = require('gulp');
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');
var cmq = require('gulp-combine-media-queries');
var babel = require('gulp-babel');
var header = require('gulp-header');
var plumber = require('gulp-plumber');
var notifier = require('node-notifier');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var jsminify = require('gulp-babel-minify');
var browserSync = require('browser-sync');
var imagemin = require('gulp-imagemin');
var mozjpeg = require('imagemin-mozjpeg');
var pngquant = require('imagemin-pngquant');

var paths = {
    pug: 'src/pug/',
    stylus: 'src/stylus/',
    babel: 'src/babel/',
    img: 'src/image/',
    dev: 'development/',
    css: 'development/css/',
    js: 'development/js/',
    imgmin: 'development/image/',
};

//imgmin
gulp.task('imagemin', function () {
    gulp.src(paths.img + '/*.{jpg,jpeg,png,gif,svg}')
        .pipe(
            imagemin([
                pngquant(),
                mozjpeg({ quality: 80 }),
                imagemin.svgo(),
                imagemin.gifsicle(),
            ])
        )
        .pipe(gulp.dest(paths.imgmin));
});

//pug
gulp.task('pug', (done) => {
    gulp.src([paths.pug + '**/*.pug', '!**/_*.pug'])
        // .pipe(plumber({errorHandler: errorHandler}))
        .pipe(pug({ pretty: '\t' }))
        .pipe(rename({ extname: '.html' }))
        .pipe(plumber())
        .pipe(gulp.dest(paths.dev));
    done();
});

//css
gulp.task('stylus', (done) => {
    gulp.src([paths.stylus + '**/*.styl', '!**/_*.styl'])
        .pipe(stylus())
        .pipe(
            cmq({
                log: true,
            })
        )
        .pipe(plumber())
        .pipe(gulp.dest(paths.css));
    done();
});

//babel
gulp.task('babel', (done) => {
    gulp.src([paths.babel + '**/*.es6'])
        .pipe(
            babel({
                presets: ['@babel/env'],
                // presets: ['es2015']
            })
        )
        .pipe(plumber())
        .pipe(gulp.dest(paths.js));
    done();
});

gulp.task('browser-sync', function (done) {
    browserSync({
        server: {
            baseDir: paths.dev,
            index: 'index.html',
        },
    });
    done();
});

gulp.task('bs-reload', function (done) {
    browserSync.reload();
    done();
});

//watch
gulp.task('watch', function () {
    gulp.watch([paths.pug + '**/*.pug'], ['pug']);
    gulp.watch([paths.stylus + '**/*.styl'], ['stylus']);
    gulp.watch([paths.babel + '**/*.es6'], ['babel']);
    gulp.watch([paths.dev + '**'], ['bs-reload']);
});

// gulp.task('watch', function() {
// 	gulp.watch([paths.pug + '**/*.pug'], gulp.task('pug'));
// 	gulp.watch([paths.stylus + '**/*.styl'], gulp.task('stylus'));
// 	gulp.watch([paths.babel + '**/*.es6'], gulp.task('babel'));
// 	gulp.watch([paths.dev + '**'], gulp.task('bs-reload'));
// });

//default
// gulp.task('default', gulp.series(gulp.parallel('pug','stylus','babel'), gulp.series('browser-sync', 'watch')));
gulp.task('default', ['pug', 'stylus', 'babel', 'browser-sync', 'watch']);
