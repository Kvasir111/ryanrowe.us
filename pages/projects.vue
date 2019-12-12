<template>
	<div class="h-screen flex">
	<div class="m-auto " id="github">
		<h1 class="text-2xl border-b-2 w-1/3 mb-4 text-center mx-auto border-b-white text-center text-white">Github Repos</h1>
		<ul class="mx-auto text-center">
			<repo-node :key=index v-for="(link, index) in gitLinks"
			           v-bind:repo-name="gitLinks[index].repoName"
			           v-bind:repo-link="gitLinks[index].repoLink"
						v-bind:repo-lang="gitLinks[index].repoLang"
			           v-bind:repo-description="gitLinks[index].repoDescription"
			/>
		</ul>

	</div>
	</div>
</template>

<script>
	import $ from 'jquery';
	import axios from 'axios';
	import RepoNode from "../components/repoNode";
	export default {
		name: "projects",
		components: {RepoNode},
		data : function(){
			return{
				gitLinks: [],

			}
		},
		mounted : function (){
			axios.get("https://api.github.com/users/Kvasir111/repos").then(response =>
				{
					for (let index in response.data){
						console.log(response.data[index].name);
						console.log(response.data[index].html_url);
						this.gitLinks.push(
							{
								repoName : response.data[index].name,
								repoLink : response.data[index].html_url,
								repoLang : response.data[index].language,
								repoDescription: response.data[index].description
							}
						)
					}
				}
			);
		},
		methods :{

		}
	}
</script>

<style scoped>

</style>