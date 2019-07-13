<template>
	<div class="navbar">
		<nuxt-link to="/" class="hover:text-pink-600 navbarButton">Home</nuxt-link>
		<nuxt-link to="/bio" class="hover:text-pink-600 navbarButton">Bio</nuxt-link>
		<nuxt-link to="/projects" class="hover:text-pink-600 navbarButton">Projects</nuxt-link>
	</div>
</template>

<script>
	export default {
		name: "navbar"
	}
</script>

<style scoped>

</style>