<template>
	<div>
		<div class="h-screen w-auto object-cover overflow-hidden">
			<img alt="The Big man himself" class="fill-current" :src=this.backgroundImage>
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
				backgroundImage : require('../static/images/sadman.jpg')
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