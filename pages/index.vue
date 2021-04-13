<template>
  <div id="container" class="">
    <nav class="text-white">
      <a v-for="(link, index) in links" class="p-2" v-bind:href="link.link">
        {{ link.text }}
      </a>
    </nav>
    <section id="section1" class="fwh-slide">
      <name class="mx-auto my-auto max-w-3xl text-center"></name>
    </section>
    <section id="section2" class="fwh-slide">
      <about class="mx-auto my-auto max-w-3xl"></about>
    </section>
    <section id="section3" class="fwh-slide">
      <resume class=" bg-red-300 mx-auto my-auto max-w-3xl text-center"></resume>
    </section>
    <section id="section4" class="fwh-slide">
      <contact class=" bg-blue-300 mx-auto my-auto max-w-3xl text-center"></contact>
    </section>
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
      ]
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

.wrapper {
  position: relative;
}

@media handheld {
  .fwh-slide {
    @apply flex;
    height: 100%;
  }
}

@media screen {
  .fwh-slide {
    @apply flex;
    height: 100vh;
    box-sizing: border-box;
  }
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

</style>
