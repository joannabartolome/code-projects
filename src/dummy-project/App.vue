<template>
	<div class='app'>
		<project :state='state'></project>
	</div>
</template>


<script>
	import Vue from 'vue'

	// TODO: Dynamic import() for less verbose syntax
	import DummyComponent from './blueprints/DummyComponent.vue'
	Vue.component('dummy-component', DummyComponent)

	import DummyComponentScenario from './scenarios/DummyComponentScenario.vue'
	Vue.component('dummy-component-scenario', DummyComponentScenario)


	export default Vue.extend({
		data() {
			return {
				state: {
					title: 'Dummy Project',
					info: 'This is some project info',
					scenarioList: [
						{
							name: 'Dummy Component',
							blueprint: 'dummy-component-scenario'
						},
						{
							name: 'Dummy Component 2',
							blueprint: 'dummy-component-scenario'
						}
					],
					selectedScenario: 'Dummy Component',
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