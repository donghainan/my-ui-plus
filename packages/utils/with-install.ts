import type { App, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export const withInstall = <T>(comp: T): SFCWithInstall<T> => {
	;(comp as SFCWithInstall<T>).install = function (app: App) {
		app.component((comp as any).name, comp as SFCWithInstall<T>)
	}
	return comp as SFCWithInstall<T>
}
