<template>
	<div>
		<div class="h-screen flex overflow-hidden">
			<img class="m-auto object-cover h-screen w-auto md:h-auto md:w-screen" alt="The Big Man" v-bind:src="backgroundImage">
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

</style>