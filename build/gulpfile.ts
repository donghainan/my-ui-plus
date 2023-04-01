import { run } from './utils/index'
import { series, parallel } from 'gulp'
import { withTaskName } from './utils'

export default series(
	withTaskName('clean', async () => run('rm -rf ./edy-plus')),
	withTaskName('buildPackages', () =>
		run('pnpm run --filter "./packages/*" --parallel build')
	)
)
