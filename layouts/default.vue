<template>
	<div class="">
		<div class="">
			<button class="top" id="openButton" v-on:click="openNav">
				<right-arrow class="top"/>
			</button>
			<div class="navMenu inline-block h-screen" id="sideNavigation">
				<span v-on:click="closeNav"><left-arrow class="closeButton"/></span>
				<ul>
					<li v-on:click="closeNav"><nuxt-link class="navButton text-white hover:bg-gray-300 hover:text-black" to="/">HOME</nuxt-link></li>
					<li v-on:click="closeNav"><nuxt-link class="navButton text-white hover:bg-gray-300 hover:text-black" to="/bio">BIO</nuxt-link></li>
					<li v-on:click="closeNav"><nuxt-link class="navButton text-white hover:bg-gray-300 hover:text-black" to="/projects">PROJECTS</nuxt-link></li>
					<li v-on:click="closeNav"><nuxt-link class="navButton text-white hover:bg-gray-300 hover:text-black" to="/resume">RESUME</nuxt-link></li>
				</ul>
			</div>
		</div>
		<nuxt id="app"/>
	</div>
</template>
<script>
	import RightArrow from "../components/icons/rightArrow";
	import LeftArrow from "../components/icons/leftArrow";
	export default {
		components: {LeftArrow, RightArrow},
		data: function () {
			return {
				myName: "RYAN ROWE"
			}
		},
		methods :{
			openNav(){
				document.getElementById("sideNavigation").style.width = "250px";
				document.getElementById("openButton").style.display = "none";
			},
			closeNav(){
				document.getElementById("sideNavigation").style.width = "0";
				document.getElementById("openButton").style.display = "inline"
			}
		}
	}
</script>
<style>
	.top{
		z-index: 1;
		position: fixed;
	}
	html {
		background: #0f0f0f;
		font-size: 16px;
		word-spacing: 1px;
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		box-sizing: border-box;
	}
	.navMenu {
		height: 100%; /* 100% Full-height */
		width: 0; /* 0 width - change this with JavaScript */
		position: fixed; /* Stay in place */
		z-index: 1; /* Stay on top */
		top: 0; /* Stay at the top */
		left: 0;
		background-color: #111; /* Black*/
		opacity: 0.8;
		overflow-x: hidden; /* Disable horizontal scroll */
		padding-top: 60px; /* Place content 60px from the top */
		transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
	}
	.navButton{
		@apply block p-2
	}
	.navMenu .closeButton {
		position: absolute;
		top: 0;
		right: 25px;
		font-size: 36px;
		margin-left: 50px;
	}
</style>
