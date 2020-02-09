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

	const validate = new Ajv().compile(yaml.safeLoad(`

type: 'object'
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
          const result = validate(model)
          if (!result) {
            for (let err of validate.errors) {
              let msg = `VALIDATION ERROR: ${err.message}\n`
              msg += `    Schema Location: ${err.schemaPath}\n`
              msg += `    Data Location: ${err.dataPath}`
              console.error(msg)
            }
            return false
          }
          return true
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
			border-bottom: 1.5px solid rgba(0,0,0,0);

			&--hovered {
				border-bottom: 1.5px solid rgba(0,0,0,1);
			}

			&--unhovered {
				opacity: .3;
			}
		}
	}
</style>