<template>
    <i class="edy-icon" :style="style">
        <slot />
    </i>
</template> 

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { iconProps } from './icon'
export default defineComponent({
    name: 'EIcon',
    props: iconProps,
    setup(props) {
        const style = computed(()=> {
            if(!props.size && !props.color) {
                return {}
            }
            return {
                ...(props.size?{'font-size':  props.size + 'px'}: {}),
                ...(props.color?{'color':  props.color }: {}),
            }
        })
        return {
            style
        }
    }
})
</script>  