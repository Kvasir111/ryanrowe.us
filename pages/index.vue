<template>
	<div>
		<div class="">
			<img id="background" alt="The Big man himself" class="" :src=this.mobileBackgroundImage>
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
				mobileBackgroundImage: require('../static/images/mobileBackground.jpg')
			}
		},
		mounted() {
		},
		created() {

		}
	}
</script>

<style scoped>
	@responsive {
		.fullscreen {
			@apply h-screen w-full overflow-hidden justify-center
		}
	}
	html{
		height: 100%;
	}
</style>