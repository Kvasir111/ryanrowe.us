<template>
	<div class="md:fullscreen">
	<img  alt="bg" class="h-screen w-screen overflow-hidden justify-center lg:h-auto" src="~static/images/sadman.jpg">
	</div>
</template>

<script>
	export default {
		name: "index",
		components: {
		},
		data: function () {
			return{
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
			@apply h-screen overflow-hidden justify-center w-full
		}
	}
	html{
		height: 100%;
	}
</style>