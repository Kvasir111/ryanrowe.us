<template>
  <div>
    <nav id="navbar" class="text-white overflow-hidden sticky bg-black md:bg-transparent">
      <a v-for="(link, index) in links" class="p-2 mr-2 ml-2" v-bind:href="link.link">
        {{ link.text }}
      </a>
    </nav>
    <div id="flexbox-container" class="content">
      <section id="section1" class="md:h-screen h-full md:mt-0 md:mb-0 mt-4 mb-4">
        <name class="p-2 max-w-3xl m-auto text-center"></name>
      </section>
      <section id="section2" class="md:h-screen h-full md:mt-0 md:mb-0 mt-4 mb-4">
        <about class="p-2 max-w-3xl m-auto"></about>
      </section>
      <section id="section3" class="md:h-screen h-full md:mt-0 md:mb-0 mt-4 mb-4">
        <resume class="p-2 max-w-3xl m-auto"></resume>
      </section>
      <section id="section4" class="md:h-screen h-full md:mt-0 md:mb-0 mt-4 mb-4">
        <contact class="p-2 max-w-3xl m-auto"></contact>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data: function () {
    return {
      image: 'https://raw.githubusercontent.com/Kvasir111/ryanrowe.us/new/assets/images/ascii.svg',
      links: [
        {text: 'Home', link: '#section1'},
        {text: 'About Me', link: '#section2'},
        {text: 'Resume', link: '#section3'},
        {text: 'Contact', link: '#section4'},
      ],
    }
  },
  methods: {}
}
</script>

<style>
body {
  margin: 0;
}

#flexbox-container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: stretch;
}

section {
  display: flex;
  height: 100%;
  width: 100%;
}

#section1 {
  font-family: "Hacked CRT", "sans-serif";
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://svgshare.com/i/WBM.svg");
  z-index: -100;
  height: 100vh;
}

nav {
  font-family: "Fake Receipt", sans-serif;
}

nav a {
  float: left;
  display: block;
  padding: 14px;
  text-decoration: none;
  z-index: 100;
}

.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

.sticky + .content {
  padding-top: 60px;
}
</style>
