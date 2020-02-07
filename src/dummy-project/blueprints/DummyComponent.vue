<template>
	<div class='dummy-component'>
		<h1>I'm a dummy component!!!!</h1>
		<div>Here's some state: {{state.bloop}}</div>
	</div>
</template>


<script>
	import Vue from 'vue'

	export default Vue.extend({
		props: ['state'],
	})
</script>


<style lang='scss'>
	.dummy-component {
		color: #445566;
	}
</style>