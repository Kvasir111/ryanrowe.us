<template>
	<div class="inline-block min-h-full">
		<h1 class="nav-header">{{myName}}</h1>
		<nuxt-link class="hover:text-nuPinkLight nav-link hover-score" to="/">HOME</nuxt-link>
		<nuxt-link class="hover:text-nuPinkLight nav-link hover-score" to="/bio">BIO</nuxt-link>
		<nuxt-link class="hover:text-nuPinkLight nav-link hover-score" to="/projects">PROJECTS</nuxt-link>
		<nuxt-link class="hover:text-nuPinkLight nav-link hover-score" to="/resume">RESUME</nuxt-link>
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