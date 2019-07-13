<template>
	<div>
	<div id="basic-information" class="text-center text-white">
		<h1 class="text-2xl">{{name}}</h1>
		<h2 class="text-xl">{{myTitle}}</h2>
	</div>
		<div id="job-experience" class="text-white text-center">
			<h1> &lt;h1&gt;Job Experience&lt;/h1&gt; </h1>
			<ul>
				<li :key="index" v-bind:value="jobs.year" v-for="(jobs, index) in jobs"> {{jobs.job}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "simple_resume",
		data: function () {
			return{
				name : "Ryan Rowe",
				myTitle: "Combat Engineer | Powerlifter | Developer",
				jobs:[
					{years: "2012-2014" , company: "Best Buy" ,job: "PC Sales Consultant"},
					{years: "2014-2016" , company: "Geek Squad", job: "Advanced Repair Agent"},
					{years: "2016-2022" , company: "Wisconsin Army National Guard", job: "Combat Engineer (12B)"},
					{years: "2018-2020" , company : "Hiawatha Broadband Communications", job: "TAC Analyst"},
				],
				education :[
					{institution : "Dakota County Technical College", degree: "AAS Networking Administration"},
					{institution : "Winona State University", degree: "BAS Computer Science, Focus in Bioinfomatics"},
				],
				skills : [
					{skill: "Java Programming"},
					{skill: "C Programming"},
					{skill: "Python Programming"},
					{skill : "Nuxt/Vue.js"},
					{skill: "Windows Server"},
					{skill: "Cisco Networking"}
				]
			}
		}
	}
</script>

<style scoped>

</style>