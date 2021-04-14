<template>
  <div>
    <h1 class="text-2xl">Contacting Me</h1>
    <p>
      If you're looking to hire ya boi, please contact me though my email, or though linkedin! <br>
      Below I have provided some links to my social media, feel free to use them!
    </p>
    <ul class="text-center">
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
h1 {
  font-family: "Fake Receipt", sans-serif;
  color: #838375;
}

p {
  font-family: "Liquid Crystal", sans-serif;
  color: #8b8b91;
}

a {
  @apply text-2xl;
  font-family: "Liquid Crystal", sans-serif;
  color: #f44268;
}

</style>
