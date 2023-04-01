<template>
	<button class="edy-button" :class="buttonStyle">
		<slot />
	</button>
</template>

<script lang="ts">
	import '../style'
	import { computed, defineComponent } from 'vue'
	import { buttonProps } from './button'
	export default defineComponent({
		name: 'EButton',
		props: buttonProps,
		setup(props) {
			const buttonStyle = computed(() => {
				return { [`edy-button--${props.type}`]: props.type }
			})
			return {
				buttonStyle,
			}
		},
	})
</script>
