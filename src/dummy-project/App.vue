<template>
	<div class='app'>
		<project :state='state'></project>
	</div>
</template>


<script>
	import Vue from 'vue'

	// Import components
	Vue.component('dummy-component', () => import('./blueprints/DummyComponent.vue'))

	// Import scenarios
	Vue.component('dummy-component-scenario', () => import('./scenarios/DummyComponentScenario.vue'))
	Vue.component('dummy-component-scenario-2', () => import('./scenarios/DummyComponentScenario2.vue'))


	export default Vue.extend({
		data() {
			return {
				state: {
					title: 'Dummy Project',
					info: 'This is some project info Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at urna efficitur massa finibus eleifend. Aliquam sem risus, viverra vitae ipsum sit amet, molestie gravida dolor.',
					scenarioList: [
						{
							name: 'Dummy Component',
							blueprint: 'dummy-component-scenario'
						},
						{
							name: 'Dummy Component 2',
							blueprint: 'dummy-component-scenario-2'
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