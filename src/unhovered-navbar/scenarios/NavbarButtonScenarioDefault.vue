<template>
	<div class='scenario'>
		<navbar-button :model='model'></navbar-button>
	</div>
</template>


<script>
	import Vue from 'vue'

	export default Vue.extend({
		data() {
			return {
				model: {
					state: 'default',
					label: 'Product',
					url: '#',
					id: 'btn_1',
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