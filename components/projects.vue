<template>
  <div>
    <ul>
      <li v-for="(link , index) in gitlinks"></li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {

  name: "projects",
  data: function () {
    return {
      profileURL: 'https://api.github.com/users/Kvasir111/repos',
      gitlinks: [],

    }
  },
  methods: {
    getGit() {
      axios.get(this.profileURL).then(response => {
        for (let windex in response.data) {
          if (response.data[index].homepage != null && response.data[index].homepage !== "") {
            this.gitlinks.push(
              {
                repoName: response.data[index].name,
                repoLink: response.data[index].homepage,
                repoLang: response.data[index].language,
                repoDescription: response.data[index].description
              }
            )
          }
        }
      })
    }
  }

}
</script>

<style scoped>

</style>
