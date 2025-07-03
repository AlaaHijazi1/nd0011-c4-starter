import gulp from "gulp";
import shell from "gulp-shell";

gulp.task("unitTest", shell.task("mocha"));
gulp.task("build", shell.task("npm run build"));

gulp.task("default", gulp.series("build", "unitTest"));
