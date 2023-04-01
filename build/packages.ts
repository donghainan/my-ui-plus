import { withTaskName } from './utils'
import { outDir, projectRoot } from './utils/paths'
import { series, parallel, src, dest } from 'gulp'
import path from 'path'
import { buildConfig } from './utils/config'
import ts from 'gulp-typescript'

export const buildPackages = (dirname: string, name: string) => {
	const tasks = Object.entries(buildConfig).map(([module, config]) => {
		const output = path.resolve(dirname, config.output.name)
		return series(
			withTaskName(`build:${dirname}`, () => {
				const tsConfig = path.resolve(projectRoot, 'tsconfig.json')
				const inputs = ['**/*.ts', '!node_modules', '!gulpfile.ts']
				return src(inputs)
					.pipe(
						ts.createProject(tsConfig, {
							declaration: true, // 生成配置文件
							strict: false,
							module: config.module,
						})()
					)
					.pipe(dest(output))
			}),
			withTaskName(`copy:${dirname}`, () => {
				return src(`${output}/**`).pipe(
					dest(path.resolve(outDir, config.output.name, name))
				)
			})
		)
	})
	return parallel(...tasks)
}
