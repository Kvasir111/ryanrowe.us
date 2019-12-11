<template>
	<div>
	<simple_resume class=""></simple_resume>
	</div>
</template>

<script>
	import Simple_resume from "../components/simple_resume";
	export default {
		name: "Resume",
		components: {Simple_resume}
	}
</script>

<style scoped>
	.centered {
		position: fixed;
		top: 50%;
		left: 50%;
		/* bring your own prefixes */
		transform: translate(-50%, -50%);
	}

</style>