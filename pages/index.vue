<template>
  <div>
    <nav class="text-white">
      <a v-for="(link, index) in links" class="p-2" v-bind:href="link.link">
        {{ link.text }}
      </a>
    </nav>
    <div class="flex-container">
      <section id="section1" class="flex h-screen">
        <name class="p-2 m-auto "></name>
      </section>
      <section id="section2" class="flex h-screen">
        <about class="p-2 mx-auto"></about>
      </section>
      <section id="section3" class="flex h-screen">
        <resume class="p-2 mx-auto"></resume>
      </section>
      <section id="section4" class="flex h-screen">
        <contact class="p-2"></contact>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data: function () {
    return {
      image: 'https://svgshare.com/i/WAC.svg',
      links: [
        {text: 'Home', link: '#section1'},
        {text: 'About Me', link: '#section2'},
        {text: 'Resume', link: '#section3'},
        {text: 'Contact', link: '#section4'},
      ],
    }
  },
}
</script>

<style>
body {
  margin: 0;
}


#section1 {
  font-family: "Hacked CRT", "sans-serif";
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://svgshare.com/i/WBM.svg");
}

nav {
  font-family: "Fake Receipt", sans-serif;
}

.flex-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
