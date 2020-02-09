<template>
	<div class='app'>
		<h1>I'm a Vue App!!!!</h1>
		<div class='wrapper'>
			<div v-for='p in state.projectList'>
				<a :href='p.link' target="_blank">{{p.name}}</a>
				{{p.name}}
			</div>
		</div>
	</div>
</template>


<script>
	import Vue from 'vue'

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
							name: 'Unhovered Navbar',
							link:'unhovered-navbar/index.html',
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