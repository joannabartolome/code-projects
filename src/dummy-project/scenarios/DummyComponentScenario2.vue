<template>
	<div class='scenario'>
		<dummy-component :state='state'></dummy-component>
	</div>
</template>


<script>
	import Vue from 'vue'

	export default Vue.extend({
		data() {
			return {
				state: {
					bloop: 'Scenario TWO content',
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