<template>
	<div class='scenario'>
		<navbar :model='model'></navbar>
	</div>
</template>


<script>
	import Vue from 'vue'

	export default Vue.extend({
		data() {
			return {
				model: {
					buttonList: [
						{
							state: 'unhovered',
							label: 'Product',
							url: '#',
							id: 'btn_1',
						},
						{
							state: 'unhovered',
							label: 'Learn',
							url: '#',
							id: 'btn_2',
						},
						{
							state: 'unhovered',
							label: 'Support',
							url: '#',
							id: 'btn_3',
						},
						{
							state: 'unhovered',
							label: 'About',
							url: '#',
							id: 'btn_4',
						},
					],
					hoveredButtonID: '',
				}
			}
		}
	})
</script>


<style lang='scss'>
	.scenario {
		width: 100%;
	}
</style>