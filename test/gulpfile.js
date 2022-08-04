const { series, parallel, src, dest, watch } = require("gulp");
const pug = require('gulp-pug');

function defaultTask(cb) {
    return src('src/pug/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(dest('public/js'));
}

function runServer(cb) {
    cb();
}

function watchFiles() {
    watch('src/pug/*.pug', defaultTask);
}
exports.default = parallel(
    defaultTask,
    runServer
);