<template>
	<div class='project'>
		<h1>Project: {{state.title}}</h1>
		<div>{{state.info}}</div>
		<div class='project__scenario-list'>
			<project-item v-for='s in state.scenarioList'
				 class='project__scenario-item'
				 :name='s.name'
				 :is-active='isActive(s)'
				 :state='state'>
				 <component :is='s.blueprint'></component>
			</project-item>
		</div>
	</div>
</template>


<script>
	import Vue from 'vue'

	export default Vue.extend({
		props: ['state'],
		methods: {
			isActive(scenario) {
				if (scenario.name === this.state.selectedScenario) {
					return true
				} else {
					return false
				}
			},
		},
	})
</script>


<style lang='scss'>
	.project {
		color: #445566;

		&__scenario-list {
			margin-top: 30px;
		}
	}
</style>