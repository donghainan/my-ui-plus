// 打包样式
import path from 'path'
import { series, src, dest } from 'gulp'
import gulpSass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import cleanCss from 'gulp-clean-css'
import dartSass from 'sass'

function compile() {
	const sass = gulpSass(dartSass)
	return src(path.resolve(__dirname, './src/*.scss'))
		.pipe(sass.sync())
		.pipe(autoprefixer())
		.pipe(cleanCss())
		.pipe(dest('./dist/css'))
}
function copyFont() {
	return src(path.resolve(__dirname, 'src/fonts/**'))
		.pipe(cleanCss())
		.pipe(dest('./dist/fonts'))
}

function copyFullStyle() {
	return src(path.resolve(__dirname, './dist/**')).pipe(
		dest(path.resolve(__dirname, '../../edy-plus/theme-chalk'))
	)
}

export default series(compile, copyFont, copyFullStyle)
