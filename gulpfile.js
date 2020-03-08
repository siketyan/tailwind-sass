const path = require('path');
const gulp = require('gulp');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');

const base = __dirname;
const directories = {
    source: path.join(base, 'src'),
    destination: path.join(base, 'dist'),
};

const source = gulp.src(path.join(directories.source, '**', '*.scss'));
const destination = gulp.dest(directories.destination);
const plugins = [
    tailwindcss,
    autoprefixer,
];

gulp.task('tailwind', () => source.pipe(postcss(plugins)).pipe(destination));
