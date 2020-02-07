<template>
	<div class='app'>
		<h1>I'm a dummy component!!!!</h1>
	</div>
</template>


<script>
	import Vue from 'vue'

	const baseURL = '/code-projects'

	export default Vue.extend({
		data() {
			return {
				state: {
					projectList: [
						{
							name: 'Dummy Project',
							link: 'dummy-project/index.html',
						},
						{
							name: 'Pricing Card',
							link:'pricing-card/index.html',
						},
					],
				}
			}
		}
	})
</script>


<style lang='scss'>
	.app {
		color: #445566;
	}
</style>