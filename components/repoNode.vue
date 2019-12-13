<template>
	<div>
		<div class="project-box m-2 sm:zoom">
		<a v-bind:href="repoLink" target="_blank">
			<h1 class="project-title">{{repoName}}</h1>
			<h2 class="project-description italic">{{repoLang}}</h2>
			<h3 class="project-description">{{repoDescription}}</h3>
		</a>
		</div>
	</div>
</template>

<script>
	export default {
		name: "repoNode",
		components: {},
		props: {
			repoName : '',
			repoLink : '',
			repoLang : '',
			repoDescription: '',
		}
	}
</script>

<style scoped>
	.stroke{
		z-index: -1;
	}
	.top{
		z-index: 1;
	}
	.project-box{
		@apply text-left rounded-outline rounded-lg mx-auto p-2 py-3;
	}
	.project-title{
		@apply text-xl text-center text-white font-bold
	}
	.project-description{
		@apply text-center text-white font-light
	}
	.rounded-outline{
		border-color: #b71c1c;
		border-style: solid;
		border-width: 2px;
	}
	@responsive {
		.zoom {
			transition: .2s;
		}

		.zoom:hover {
			background: #b71c1c;
			transform: scale(1.2);
		}
	}

</style>