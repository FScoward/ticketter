var gulp = require("gulp");
var typescript = require('gulp-typescript');


gulp.task('tsc', function(){
  gulp.src('./typescript/*.ts')
    .pipe(typescript('tsconfig.json'))
    .js
    .pipe(gulp.dest('./public/javascripts'))
})

gulp.task('watch', function() {
  gulp.watch('./typescript/*.ts', ['tsc'])
})

gulp.task('copy', function() {
  gulp.src('./node_modules/systemjs/dist/system-polyfills.js')
    .pipe(gulp.dest('./public/javascripts'))

  gulp.src('./node_modules/es6-shim/es6-shim.min.js')
    .pipe(gulp.dest('./public/javascripts'))

  gulp.src('./node_modules/angular2/bundles/angular2-polyfills.js')
    .pipe(gulp.dest('./public/javascripts'))

  gulp.src('./node_modules/systemjs/dist/system.src.js')
    .pipe(gulp.dest('./public/javascripts'))

  gulp.src('./node_modules/systemjs/dist/system.src.js')
    .pipe(gulp.dest('./public/javascripts'))

  gulp.src('./node_modules/rxjs/bundles/Rx.js')
    .pipe(gulp.dest('./public/javascripts'))

  gulp.src('./node_modules/angular2/bundles/angular2.dev.js')
    .pipe(gulp.dest('./public/javascripts'))
})

gulp.task('default', ['watch']);