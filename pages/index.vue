<template>
  <div id="container" class="">
    <nav class="fixed text-white">
      <a v-for="(link, index) in links" class="p-2" v-bind:href="link.link">
        {{ link.text }}
      </a>
    </nav>
    <section id="section1" class="fwh-slide">
      <name class="w-full bg-white text-center"></name>
    </section>
    <section id="section2" class="fwh-slide">
      <about class="bg-white"></about>
    </section>
    <section id="section3" class="fwh-slide">
      <resume class=" bg-red-300 text-center"></resume>
    </section>
  </div>
</template>

<script>
export default {
  name: 'index',
  data: function () {
    return {
      links: [
        {text: 'Home', link: '#section1'},
        {text: 'About Me', link: '#section2'},
        {text: 'Resume', link: '#section3'},
      ]
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

.fwh-slide {
  height: 100vh;
  box-sizing: border-box;
}
</style>
