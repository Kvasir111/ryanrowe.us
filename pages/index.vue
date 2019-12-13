<template>
	<div>
		<div class="h-screen flex overflow-hidden">
			<div class="absolute absoluteCenter onTop inline-block">
				<span class="nameText pointer-events-none">{{name}}</span>
			</div>
			<img class="onBottom m-auto object-cover h-screen w-auto md:h-auto md:w-screen" alt="The Big Man" v-bind:src="backgroundImage">
		</div>
	</div>
</template>

<script>
	export default {
		name: "index",
		components: {
		},
		data: function () {
			return{
				name: 'RYAN ROWE',
				backgroundImage : require('../static/images/sadman.jpg'),
				mobileBackgroundImage: require('../static/images/mobileBackground.webp')
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
		font-family: "Universal Ignorance", sans-serif;
	}

</style>