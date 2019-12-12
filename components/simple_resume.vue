<template>
	<div class="">
		<div class="text-center text-white" id="basic-information">
			<h2 class="text-xl universal-ignorance">{{myTitle}}</h2>
		</div>
		<div class="text-white mx-auto mt-2" id="job-experience">
			<h1 class="resume-heading"> Job Experience </h1>
			<ul class="mx-auto text-center">
				<li :key="index" class="job-text-center sm:job-text" v-bind:value="jobs.years" v-for="(jobs, index) in jobs"><u>{{jobs.years}}</u>
					<br> {{jobs.company}} {{jobs.job}}
				</li>
			</ul>
		</div>
		<div class="text-white mx-auto mt-2" id="education">
			<h1 class="resume-heading">Education</h1>
			<ul class="mx-auto text-center">
				<li :key="index" :value="education.institution" class="job-text-center sm:job-text"
				    v-for="(education , index) in education">
					<p class="underline">{{education.institution}}</p>
					<p>{{education.degree}}</p>
				</li>
			</ul>
		</div>
		<div class="text-white mx-auto mt-2" id="skills">
			<h1 class="resume-heading">Skills</h1>
			<ul class="mx-auto text-center">
				<li :key="index" :value="skills" class="job-text-center sm:job-text" v-for="(skills, index) in skills">{{skills.skill}}
				</li>
			</ul>
		</div>
		<div class="mx-auto text-center">
		<nuxt-link class="button" to="/bio">Click here to see my bio</nuxt-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: "simple_resume",
		data: function () {
			return {
				name: "RYAN ROWE",
				myTitle: "DEVELOPER \\ ENGINEER \\ POWERLIFTER",
				jobs: [
					{years: "2012-2014", company: "Best Buy", job: "PC Sales Consultant"},
					{years: "2014-2016", company: "Geek Squad", job: "Advanced Repair Agent"},
					{years: "2016-2022", company: "Wisconsin Army National Guard", job: "Combat Engineer (12B)"},
					{years: "2018-2020", company: "Hiawatha Broadband Communications", job: "TAC Analyst"},
				],
				education: [
					{institution: "Dakota County Technical College", degree: "AAS Networking Administration"},
					{institution: "Winona State University", degree: "BAS Computer Science, Focus in Bioinfomatics"},
				],
				skills: [
					{skill: "Java Programming"},
					{skill: "C Programming"},
					{skill: "Python Programming"},
					{skill: "Nuxt/Vue.js"},
					{skill: "Windows Server"},
					{skill: "Cisco Networking"}
				]
			}
		}
	}
</script>

<style scoped>


	.resume-heading {
		@apply text-center border-b-2 mx-auto
	}
	@responsive{
		.job-text {
			@apply text-left;
		}
		.centered-job-text{
			@apply text-center;
		}
		.button{
			@apply text-white inline-block mt-4 text-center mx-auto px-4 py-2 rounded;
			background-color: #b71c1c;
		}
	}

</style>