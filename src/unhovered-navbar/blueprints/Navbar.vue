<template>
	<div class='navbar' @mouseout='onListOut'>
		<div class='navbar__list'>
			<navbar-button
				v-for='btnModel in model.buttonList'
				:model='statefulBtnModel(btnModel)'
				@mouseover.native='onItemHover(btnModel)'
				class='navbar__item'></navbar-button>
		</div>
	</div>
</template>


<script>
	import Vue from 'vue'

	export default Vue.extend({
		props: ['model'],
		methods: {
			onItemHover(item) {
				this.model.hoveredButtonID = item.id
			},

			statefulBtnModel(btnModel) {
				if (this.model.hoveredButtonID === '') {
					btnModel.state = 'default'
				} else if (this.model.hoveredButtonID == btnModel.id) {
					btnModel.state = 'hovered'
				} else {
					btnModel.state = 'unhovered'
				}
				return btnModel
			},

			onListOut() {
				this.model.hoveredButtonID = ''
			},
		},
	})
</script>


<style lang='scss'>
	.navbar {
		background-color: #FFFFFF;

		&__list {
			padding-left: 20px;
			padding-right: 20px;

			display: flex;
			justify-content: flex-start;
		}
	}
</style>