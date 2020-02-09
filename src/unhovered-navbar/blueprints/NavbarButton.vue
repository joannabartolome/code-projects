<template>
	<div class='navbar-button'>
		<a class='navbar-button__a'
			:class='classObject'
			:href='model.url'>{{model.label}}</a>
	</div>
</template>


<script>
	import Vue from 'vue'
  import yaml from 'js-yaml'
  import Ajv from 'ajv'
  import customValidator from '#/customValidator.js'


  const validate = new Ajv().compile(yaml.safeLoad(`

type: 'object'
required:
  - 'label'
  - 'url'
  - 'id'
  - 'state'
properties:
  label:
    type: 'string'
  url:
    type: 'string'
  id:
    type: 'string'
  state:
    enum:
      - 'hovered'
      - 'unhovered'
      - 'default'

  `.trim()))


	export default Vue.extend({
		props: {
			model: {
				validator(model) {
          return customValidator(validate, model)
        }
			},
		},
		computed: {
			classObject: function() {
				let b = {}
				if (this.model.state === 'hovered') {
					b['navbar-button__a--hovered'] = true
				} else if (this.model.state === 'unhovered') {
					b['navbar-button__a--unhovered'] = true
				}
				return b
			},
		},
	})
</script>


<style lang='scss'>
	.navbar-button {
		font-family: 'Roboto';
		font-size: 14px;

		padding-top: 20px;
		padding-left: 10px;
		padding-right: 10px;

		&__a {
			display: inline-block;
			text-decoration: none;
			color: #000000;
			padding-bottom: 20px;

      position: relative;

      transition: opacity .3s;


      &:before {
        content: '';
        background-color: #000000;
        position: absolute;
        height: 2px;
        left: 0;
        right: 0;
        bottom: -2px;

        transition: transform .3s;
        transform: scaleX(0);
        transform-origin: bottom left;
      }


			&--hovered {
        &:before {
          transform: scaleX(1);
        }
			}

			&--unhovered {
				opacity: .3;
			}
		}
	}
</style>