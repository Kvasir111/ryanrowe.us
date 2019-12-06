<template>
	<div class="bg-nugray h-full ">
		<div id="main" v-bind:style="cssProps" class="parallax">

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
				cssProps : {
					backgroundImage : `url(${require('~assets/sadman.jpg')})`
				}
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