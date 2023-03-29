import { spawn } from 'child_process'
import { projectRoot } from './paths'
export const withTaskName = (name: string, fn) =>
	Object.assign(fn, { displayName: name })

export const run = async (command: string) => {
	return new Promise((resolve) => {
		const [cmd, ...args] = command.split(' ')
		const app = spawn(cmd, args, {
			cwd: projectRoot,
			stdio: 'inherit', // 将子进程的输出共享给父进程
			shell: true, // 默认情况下linux才支持 rm -rf 的 （安装了 git bash）
		})
		app.on('close', resolve)
	})
}
