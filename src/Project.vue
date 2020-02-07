<template>
	<div class='project'>
		<div class='project__summary'>
			<div class='project__summary-item'>
				<div class='project__label'>Project</div> 
				<div class='project__content'>{{state.title}}</div>
			</div>
			<div class='project__summary-item'>
				<div class='project__label'>About</div> 
				<div class='project__content'>{{state.info}}</div>
			</div>
		</div>
		<div class='project__scenarios'>
			<div class='project__scenario-list-label'>Components</div>
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
		display: flex;
		padding: 20px;
		justify-content: space-between;
		height: 13vh;
		font-family: 'Roboto';
		font-size: 11px;
		border: 1px solid blue;
		flex-wrap: wrap;
		overflow: scroll;

		@media (max-width: 650px) {
			/* Must match ProjectItem.vue breakpoint! */
			height: 20vh;
		}

		&__summary {
			max-width: 350px;
			margin-bottom: 20px;

			@media (max-width: 650px) {
				/* Must match ProjectItem.vue breakpoint! */
				max-width: 600px;
				margin-right: 20px;
			}
		}

		&__summary-item {
			display: flex;

			&:last-of-type {
				margin-top: 9px;
			}
		}


		&__label {
			width: 45px;
			flex: initial;
			text-align: right;

		}

		&__content {
			flex: 1;
			margin-left: 20px;
		}

		&__scenarios {
			max-width: 450px;
			margin-left: 63px;
			margin-right: 80px;
			border: 1px solid yellow;
			display: flex;
			flex-direction: column;
		}

		&__scenario-list {
			border: 1px solid teal;
			margin-top: 9px;
		}


	}
</style>