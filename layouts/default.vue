<template>
	<div>
		<navbar></navbar>
		<nuxt />
	</div>
</template>

<style>
	html {
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