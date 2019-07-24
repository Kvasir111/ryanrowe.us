<template>
	<div id="github" v-on:load="getGit" class="">
		<h1 class="text-center text-2xl text-white">Github Repos</h1>
		<ul id="github-links" class="mx-auto text-center"></ul>
	</div>
</template>

<script>
	import $ from 'jquery';
	export default {
		name: "projects",
		mounted : function (){
			this.getGit();
		},
		methods:{
			getGit(){
				console.log("KEK");
				$.ajax({
					url: "https://api.github.com/users/varangian111/repos",
					jsonp: true,
					method: "GET",
					dataType: "json",
					success: function(repos) {
						let repoList = Object.keys(repos).length;
						for (let i = 0 ; i < repoList ; i++){

							let repoName = repos[i].name;
							let description = repos[i].description;
							let url = repos[i].html_url;

							if (description === null){
								description = "No Description Provided"
							}
							console.log(repoName);
							$("#github-links").append(
								'<li class="text-left rounded-outline rounded-full w-1/3 mx-auto">' +
								'<a target="_blank" href="'+url+'" rel="noreferrer" class="">' +
								'<h3 class="text-xl text-center text-white font-bold">' +
								repoName +
								'</h3>' +
									'<p class="project-description">' + description + '</p>'+
								'</a>' +
							    '</li>' +
								'<br>'
							);
						}
					}
				});
			}
		}
	}
</script>

<style scoped>

</style>