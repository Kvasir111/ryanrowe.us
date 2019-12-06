<template>
	<div id="main" v-bind:style="{ 'background-image': 'url(~assets/sadman.jpg)'}" class="parallax">
	</div>
</template>

<script>
	export default {
		name: "index",
		components: {
		},
		data: function () {
			return{
				image: ''
			}
		},
		mounted() {
			this.image =
			console.log()
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