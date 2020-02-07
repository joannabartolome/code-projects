<template>
	<div class='app'>
		<!-- TODO: Should be a <project> -->
		<dummy-component-scenario></dummy-component-scenario>
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
							name: 'DummyComponent',
							blueprint: 'dummy-component-scenario'
						}
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