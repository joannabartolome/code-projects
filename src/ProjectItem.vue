<template>
	<div class='project-item'>
		<div class='project-item__label'
			 :class='classObject'
			 @click='onClick'>{{name}}</div>
		<div class='project-item__live-example' v-show='isActive'>
			<slot></slot>
		</div>
	</div>
</template>


<script>
	import Vue from 'vue'

	export default Vue.extend({
		props: ['name', 'isActive', 'state'],
		computed: {
			classObject() {
				return {
					'project-item__label--active': this.isActive,
				}
			},
		},
		methods: {
			onClick() {
				this.state.selectedScenario = this.name
			}
		},
	})
</script>


<style lang='scss'>
	.project-item {
		color: #3475F5;
		cursor: pointer;

		&__label {
			&--active {
				color: brown;
			}
		}

		&__live-example {
			border: 1px solid red;
			background-color: #F6F6F6;
			position: center;

			position: fixed;
			height: 86vh;
			left: 0;
			right: 0;
			bottom: 0;

			@media (max-width: 650px) {
				/* Must match Project.vue breakpoint! */
				height: 79vh;
			}

		}
	}
</style>