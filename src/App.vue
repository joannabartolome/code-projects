<template>
	<div class='app'>
		<h1>I'm a Vue App!!!!</h1>
		<div>Here's some state: {{state.bloop}}</div>
	</div>
</template>


<script>
	import Vue from 'vue'

	export default Vue.extend({
		data() {
			return {
				state: {
					bloop: 'Hello!'
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