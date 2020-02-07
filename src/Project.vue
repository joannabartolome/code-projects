<template>
	<div class='project'>
		<div class='project__description'>
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
					</project-item>
				</div>
			</div>
		</div>

		<div class='project__live-example'>
			<component :is='activeComponent'></component>
		</div>
	</div>
</template>


<script>
	import Vue from 'vue'

	export default Vue.extend({
		props: ['state'],
		computed: {
			activeComponent() {
				for (let s of this.state.scenarioList) {
					if (s.name === this.state.selectedScenario) {
						return s.blueprint
					}
				}
			},
		},
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
		font-family: 'Roboto';
		font-size: 11px;

		width: 100vw;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;


		&__description {
			height: 130px;
			padding-top: 20px;
			padding-bottom: 20px;

			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

			overflow: scroll;


			@media (max-width: 650px) {
				/* Must match ProjectItem.vue breakpoint! */
				height: 200px;
				display: block;
			}
		}

		&__summary {
			max-width: 350px;
			margin-left: 10px;

			@media (max-width: 650px) {
				/* Must match ProjectItem.vue breakpoint! */
				max-width: 600px;
				margin-right: 20px;
				margin-bottom: 30px;
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
			margin-left: 72px;
			margin-right: 30px;
		}

		&__scenario-list {
			margin-top: 9px;
		}


		&__live-example {
			padding: 30px;
			background-color: #F6F6F6;
			overflow: scroll;

			flex: 1;

			@media (max-width: 650px) {
				/* Must match Project.vue breakpoint! */
				height: 79vh;
			}

		}

	}
</style>