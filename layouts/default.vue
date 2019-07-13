<template>
	<div>
		<navbar></navbar>
		<nuxt />
	</div>
</template>

<style>
	html {
		font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
		Roboto, 'Helvetica Neue', Arial, sans-serif;
		font-size: 16px;
		word-spacing: 1px;
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		box-sizing: border-box;
		background-color: #1a1a1d;
	}
</style>
<script>
	import Navbar from "../components/navbar";
	export default {
		components: {Navbar}
	}
</script>