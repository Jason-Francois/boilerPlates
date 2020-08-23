const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

//compile scss into css
function style() {
  //Where is my scss file?
  return (
    gulp
      .src("./scss/**/*.scss")
      //Pass the file through sass compiler
      .pipe(sass())
      //Update compiled sass to css folder
      .pipe(gulp.dest("./css"))
      //Stream all changes to browser
      .pipe(browserSync.stream())
  );
}
function watch() {
  browserSync.init({
    //Initializes broswerSync and creates a server
    server: {
      baseDir: "./",
      index: "./html/index.html",
    },
  });
  gulp.watch("./scss/**/*.scss", style);
  gulp.watch("./html/**/*.html").on("change", browserSync.reload);
  gulp.watch("./js/**/*.js").on("change", browserSync.reload);
}
exports.style = style;
exports.watch = watch;
