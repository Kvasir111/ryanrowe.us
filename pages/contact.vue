<template>
	<div class="flex h-screen">
	<div class="m-auto">
		<a href="https://www.facebook.com/rrowe111?ref=bookmarks">
		<facebook />
		</a>
		<a href="https://www.instagram.com/rrowe222/">
			<instagram />
		</a>
		<a href="https://www.linkedin.com/in/ryan-rowe-a91216b2/">
			<linkedin />
		</a>
	</div>
	</div>
</template>

<script>
	import Facebook from "../components/icons/facebook";
	import Instagram from "../components/icons/instagram";
	import Linkedin from "../components/icons/linkedin";
	export default {
		name: "contact",
		components: {Linkedin, Instagram, Facebook}
	}
</script>

<style scoped>
	a{
		@apply inline-block p-2
	}

</style>