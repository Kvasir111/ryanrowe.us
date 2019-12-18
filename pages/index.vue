<template>
	<div>
		<div class="h-screen flex overflow-hidden">
			<div class="absolute absoluteCenter onTop inline-block">
				<span class="nameText pointer-events-none UniversalIgnorance">{{name}}</span>
			</div>
			<img class="onBottom m-auto object-cover h-screen w-auto md:h-auto md:w-screen" alt="The Big Man" v-bind:src="backgroundImage">
		</div>
	</div>
</template>

<script>
	export default {
		head() {
			return {
				script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
			};
		},
		name: "index",
		components: {
		},
		data: function () {
			return{
				name: 'RYAN ROWE',
				backgroundImage : require('../assets/images/sadman.webp'),
			}
		},
		mounted() {
		},
		created() {

		}
	}
</script>

<style scoped>

	.onBottom{
		z-index: -1;
	}
	.onTop{
		z-index: 1;
	}
	.absoluteCenter{
		left: 50%;
		top: 50%;
	}
	.nameText{
		@apply text-6xl;
		color: #b71c1c;
	}

</style>