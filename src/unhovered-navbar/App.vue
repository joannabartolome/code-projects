<template>
	<div class='app'>
		<project :state='state'></project>
	</div>
</template>


<script>
	import Vue from 'vue'

	// Import components
	Vue.component('navbar-button', () => import('./blueprints/NavbarButton.vue'))
	Vue.component('navbar', () => import('./blueprints/Navbar.vue'))

	// Import scenarios
	Vue.component('navbar-button-scenario-default', () => import('./scenarios/NavbarButtonScenarioDefault.vue'))
	Vue.component('navbar-button-scenario-hovered', () => import('./scenarios/NavbarButtonScenarioHovered.vue'))
	Vue.component('navbar-button-scenario-unhovered', () => import('./scenarios/NavbarButtonScenarioUnhovered.vue'))
	Vue.component('navbar-scenario', () => import('./scenarios/NavbarScenario.vue'))



	export default Vue.extend({
		data() {
			return {
				state: {
					title: 'Unhovered Navbar',
					info: 'This is some project info Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at urna efficitur massa finibus eleifend. Aliquam sem risus, viverra vitae ipsum sit amet, molestie gravida dolor.',
					scenarioList: [
						{
							name: 'Button Default',
							blueprint: 'navbar-button-scenario-default'
						},				
						{
							name: 'Button Hovered',
							blueprint: 'navbar-button-scenario-hovered'
						},				
						{
							name: 'Button Unhovered',
							blueprint: 'navbar-button-scenario-unhovered'
						},
						{
							name: 'Navbar',
							blueprint: 'navbar-scenario'
						},
					],
					selectedScenario: 'Navbar',
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