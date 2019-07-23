<template>
	<div id="github" v-on:load="getGit">
		<ul id="github-links"></ul>
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
								'<li>' +
								'<a target="_blank" href="'+url+'" rel="noreferrer" class="card text-left shadow-none sm:shadow-md inline-block w-full sm:w-4/5 md:w-2/3 comfort-light hover:shadow-lg">' +
								'<h3 class="text-left text-xl text-red-600 comfort pb-5">' +
								repoName +
								'</h3>' +
								description +
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