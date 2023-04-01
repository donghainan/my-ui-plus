import type { ExtractPropTypes } from 'vue'
export const buttonTypes = [
	'default',
	'primary',
	'success',
	'warning',
	'info',
	'danger',
	/**
	 * @deprecated
	 * Text type will be deprecated in the next major version (3.0.0)
	 */
	'text',
	'',
] as const
export const buttonProps = {
	/**
	 * @description button type
	 */
	type: {
		type: String,
		values: buttonTypes,
		default: '',
	},
	size: {
		type: String,
	},
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>