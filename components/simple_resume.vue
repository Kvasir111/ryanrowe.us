<template>
	<div>
	<div id="basic-information" class="text-center text-white">
		<h1 class="text-2xl permanantMarker">{{name}}</h1>
		<h2 class="text-xl permanantMarker">{{myTitle}}</h2>
	</div>
		<div class="text-white mx-auto mt-2" id="job-experience">
			<h1 class="text-center border-b-2 w-1/4 mx-auto"> Job Experience </h1>
			<ul class="mx-auto w-1/4 text-center">
				<li :key="index" class="text-left job-text" v-bind:value="jobs.years" v-for="(jobs, index) in jobs"><u>{{jobs.years}}</u>
					<br> {{jobs.company}} {{jobs.job}}
				</li>
			</ul>
		</div>
		<div class="text-white mx-auto mt-2" id="education">
			<h1 class="text-center border-b-2 w-1/4 mx-auto">Education</h1>
			<ul class="mx-auto w-1/4 text-center">
				<li :key="index" :value="education.institution" v-for="(education , index) in education">
					{{education.institution}} <br>{{education.degree}}
				</li>
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
				myTitle: "Developer | Combat Engineer | Powerlifter",
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