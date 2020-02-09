<template>
	<div class='scenario'>
		<navbar :model='model'></navbar>
    <navbar :model='model2'></navbar>
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
				},
        model2: {
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
            {
              state: 'unhovered',
              label: 'Download Now',
              url: '#',
              id: 'btn_5',
            },
          ],
          hoveredButtonID: '',
        },
      }
		}
	})
</script>


<style lang='scss'>
	.scenario {
		width: 100%;
	}
</style>