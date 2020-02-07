<template>
	<div class='project-item'>
		<div class='project-item__label'
			 :class='classObject'
			 @click='onClick'>{{name}}</div>
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
	}
</style>