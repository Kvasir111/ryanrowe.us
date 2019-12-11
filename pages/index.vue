<template>
	<div>
	<img  alt="bg" class="bg-scroll" src="~static/images/sadman.jpg">
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
		}
	}
</script>

<style scoped>
	.parallax{
		height: 100%;
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	html{
		height: 100%;
	}
</style>