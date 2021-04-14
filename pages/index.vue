<template>
  <div>
    <nav id="navbar" class="text-white overflow-hidden">
      <a v-for="(link, index) in links" class="p-2" v-bind:href="link.link">
        {{ link.text }}
      </a>
    </nav>
    <div id="flexbox-container" class="content">
      <section id="section1" class="flex h-90">
        <name class="p-2 max-w-3xl m-auto text-center"></name>
      </section>
      <section id="section2" class="">
        <about class="p-2 max-w-3xl m-auto"></about>
      </section>
      <section id="section3" class="">
        <resume class="p-2 max-w-3xl m-auto"></resume>
      </section>
      <section id="section4" class="">
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
      image: 'https://svgshare.com/i/WAC.svg',
      links: [
        {text: 'Home', link: '#section1'},
        {text: 'About Me', link: '#section2'},
        {text: 'Resume', link: '#section3'},
        {text: 'Contact', link: '#section4'},
      ],
    }
  },
  updated() {
    window.onscroll = function () {
      let nav = document.getElementById('navbar');
      let sticky = nav.offsetTop;
      if (window.pageYOffset >= sticky) {
        nav.classList.add('sticky')
      } else {
        nav.classList.remove('sticky');
      }
    };
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
  @apply h-screen flex mt-2
}

#section1 {
  font-family: "Hacked CRT", "sans-serif";
  position: relative;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://svgshare.com/i/WBM.svg");
  z-index: -100;
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
