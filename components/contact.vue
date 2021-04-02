<template>
  <div>
    <h1 class="text-2xl">Contacting Me</h1>
    <p>
      If you're looking to hire ya boi, please contact me though my email, or though linkedin! <br>
      Below I have provided some links to my social media, feel free to use them!
    </p>
    <ul>
      <li><a v-bind:href="email">Email</a></li>
      <li><a target="_blank" v-bind:href="linkedin">Linkedin</a></li>
      <li><a target="_blank" v-bind:href="github">Github</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "contact",
  data: function () {
    return {
      email: 'mailto:rrowe@gmail.com?subject= Hello There! General Kenobi!',
      linkedin: 'https://www.linkedin.com/in/ryan-rowe-a91216b2/',
      github: 'https://github.com/Kvasir111',
    }
  }
}
</script>

<style scoped>

</style>
