import gulp from 'gulp';
import postcss from 'gulp-postcss';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import cssnext from 'cssnext';
import precss from 'precss';
import watchify from 'watchify';
import aliasify from 'aliasify';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import rename from 'gulp-rename';
import sequence from 'gulp-sequence';
import browserSyncObj from 'browser-sync';

const browserSync = browserSyncObj.create();
const reload = browserSync.reload;

gulp.task('css', function() {
    const processors = [
        autoprefixer,
        cssnext,
        precss,
        cssnano
    ];
    return gulp.src('./dev/style/*.scss')
        .pipe(sourcemaps.init())
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./dev/style/'))
        .pipe(reload({
            stream: true
        }));
});


const browserify_instance = watchify(browserify({
    entries: './dev/script/index.es6',
    debug: true,
}).transform(babelify, {
    presets: ['es2015']
}).transform(aliasify, {
    aliases: {
        vue: 'vue/dist/vue.js'
    },
    verbose: false,
}));

gulp.task('es6', bundleJs);

function bundleJs() {
    return browserify_instance
        .bundle()
        .on('error', function(err) {
            console.log(err.toString());
            this.emit('end');
        })
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(gulp.dest('./dev/script/'))
        .pipe(reload({
            stream: true
        }));
}

gulp.task('img', function() {
    return gulp.src('./dev/image/*')
        .pipe(reload({
            stream: true
        }));
});

gulp.task('compile', function(cb) {
    sequence(['css', 'es6'], cb);
});

gulp.task('default', ['compile'], function() {
    browserSync.init({
        // proxy: 'localhost:3123'
        port: 9000,
        server: {
            baseDir: './dev'
        }
    });
    gulp.watch('./dev/style/*.scss', ['css']);
    browserify_instance.on('update', bundleJs);
    gulp.watch('./dev/script/*.es6', ['es6']);

    gulp.watch('./dev/script/*.es6').on('change', reload);
});
