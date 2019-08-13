<template>
	<div class="sm:inline-block min-h-full text-center sm:text-left">
		<h1 class="nav-header">{{myName}}</h1>
		<nuxt-link class="hover:text-nuPinkLight nav-link hover-score inline-block sm:block" to="/">HOME</nuxt-link>
		<nuxt-link class="hover:text-nuPinkLight nav-link hover-score inline-block sm:block" to="/bio">BIO</nuxt-link>
		<nuxt-link class="hover:text-nuPinkLight nav-link hover-score inline-block sm:block" to="/projects">PROJECTS</nuxt-link>
		<nuxt-link class="hover:text-nuPinkLight nav-link hover-score inline-block sm:block" to="/resume">RESUME</nuxt-link>
	</div>
</template>

<script>
	export default {
		name: "navbar",
		data: function () {
			return {
				myName: "RYAN ROWE"
			}
		}
	}
</script>

<style scoped>

</style>