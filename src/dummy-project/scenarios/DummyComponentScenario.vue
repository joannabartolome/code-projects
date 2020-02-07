<template>
	<div class='scenario'>
		<dummy-component></dummy-component>
	</div>
</template>


<script>
	import Vue from 'vue'

	export default Vue.extend({
		data() {
			return {
				state: {
					bloop: 'Bleep',
				}
			}
		}
	})
</script>


<style lang='scss'>
	.scenario {
		color: #663344;
	}
</style>