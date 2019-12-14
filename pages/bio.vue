<template>
	<div class="h-screen flex">
		<div class="text-white m-auto text-center sm:w-2/3 md:1/3 p-2" id="about_me">
			<div class="object-container mx-auto">
				<img class="" alt="My goddamned face" v-bind:src="myFace">
			</div>
			<h1 class="text-center text-2xl">Who am I?</h1>
			<p class="text-left">
				Hey there! My name is Ryan. I'm a part time programmer, quarter time web developer, part time engineer and full time weirdo.
			</p>
			<br>
			<p class="text-left">
				I started my education in network administration. Learning the ins and outs of how enterprise networks function and mange their resources as well as their people.
				I learned how to use basic server software as well as enterprise networking appliances such as Cisco Routers, Switches and Firewalls. As well as fundamental data security and forensics.
				However, I wasn't satisfied with my understanding of technology. I knew how to use fancy computers, but not how humans tricked some rocks into doing math and making the pretty pictures.
				I then decided to start my education in computer science, where I learned the foundations of computer programming in Java, but also branching out into Assembly and C#, Perl, and Python.
			</p>
			<h1 class="text-center text-2xl">What do I do?</h1>
			<p class="text-left">
				I do little bits of everything. I get bored pretty easy just doing the same safe thing day in day out, so I keep busy by experimenting with little side projects. Most of them never make it beyond
				the "pile of garbage on a table surrounded by energy drinks and lots of swear words", but I consider that good experience more than anything.
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "bio",
		data: function () {
			return{
				myFace: require("../assets/images/myFace.webp")
			}
		}
	}
</script>

<style scoped>
	.object-container{
		@apply object-cover overflow-hidden rounded h-40 w-40 flex items-center justify-center object-bottom;
		background: #b71c1c;
	}

</style>