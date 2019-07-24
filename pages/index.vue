<template>
  <div id="logo">
  <ul id="ui">
    <li :key="index" v-for="index in 40" class="text">{{name}}</li>
    </ul>
  </div>
</template>

<script>

  import Simple_resume from "../components/simple_resume";
  export default {
    data: function (){
      return{
        name: "RYAN ROWE"
      }
    },
    components: {
      Simple_resume
    }
  }
</script>

<style>
  #logo{
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    -webkit-perspective: 800px;
    perspective: 800px;
  }

  #ui .text {
    position: absolute;
    font-size: 8rem;
    color: #fff;
    line-height: 8rem;
    opacity: 0;
    font-family: "Universal Ignorance", sans-serif;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    mix-blend-mode: screen;
  }
  #ui .text:nth-child(1) {
    color: #fd3203;
    -webkit-clip-path: polygon(0% 0%, 0% 50%, 10% 50%);
    clip-path: polygon(0% 0%, 0% 50%, 10% 50%);
    -webkit-transform-origin: 0% -42%;
    transform-origin: 0% -42%;
    -webkit-animation: fly1 5000ms 0ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly1 5000ms 0ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly1 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-339deg) rotateY(-289deg) rotateZ(18deg) translateZ(-1142px);
      transform: translate(-50%, -50%) rotateX(-339deg) rotateY(-289deg) rotateZ(18deg) translateZ(-1142px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-339deg) rotateY(-289deg) rotateZ(18deg) translateZ(-1142px);
      transform: translate(-50%, -50%) rotateX(-339deg) rotateY(-289deg) rotateZ(18deg) translateZ(-1142px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly1 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-339deg) rotateY(-289deg) rotateZ(18deg) translateZ(-1142px);
      transform: translate(-50%, -50%) rotateX(-339deg) rotateY(-289deg) rotateZ(18deg) translateZ(-1142px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-339deg) rotateY(-289deg) rotateZ(18deg) translateZ(-1142px);
      transform: translate(-50%, -50%) rotateX(-339deg) rotateY(-289deg) rotateZ(18deg) translateZ(-1142px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(2) {
    color: #fb3106;
    -webkit-clip-path: polygon(0% 0%, 10% 0%, 10% 50%);
    clip-path: polygon(0% 0%, 10% 0%, 10% 50%);
    -webkit-transform-origin: 13% 4%;
    transform-origin: 13% 4%;
    -webkit-animation: fly2 5000ms 40ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly2 5000ms 40ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly2 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-94deg) rotateY(-159deg) rotateZ(-205deg) translateZ(29px);
      transform: translate(-50%, -50%) rotateX(-94deg) rotateY(-159deg) rotateZ(-205deg) translateZ(29px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-94deg) rotateY(-159deg) rotateZ(-205deg) translateZ(29px);
      transform: translate(-50%, -50%) rotateX(-94deg) rotateY(-159deg) rotateZ(-205deg) translateZ(29px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly2 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-94deg) rotateY(-159deg) rotateZ(-205deg) translateZ(29px);
      transform: translate(-50%, -50%) rotateX(-94deg) rotateY(-159deg) rotateZ(-205deg) translateZ(29px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-94deg) rotateY(-159deg) rotateZ(-205deg) translateZ(29px);
      transform: translate(-50%, -50%) rotateX(-94deg) rotateY(-159deg) rotateZ(-205deg) translateZ(29px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(3) {
    color: #f93109;
    -webkit-clip-path: polygon(10% 0%, 10% 50%, 20% 50%);
    clip-path: polygon(10% 0%, 10% 50%, 20% 50%);
    -webkit-transform-origin: 14% -30%;
    transform-origin: 14% -30%;
    -webkit-animation: fly3 5000ms 80ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly3 5000ms 80ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly3 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(29deg) rotateY(269deg) rotateZ(185deg) translateZ(-106px);
      transform: translate(-50%, -50%) rotateX(29deg) rotateY(269deg) rotateZ(185deg) translateZ(-106px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(29deg) rotateY(269deg) rotateZ(185deg) translateZ(-106px);
      transform: translate(-50%, -50%) rotateX(29deg) rotateY(269deg) rotateZ(185deg) translateZ(-106px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly3 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(29deg) rotateY(269deg) rotateZ(185deg) translateZ(-106px);
      transform: translate(-50%, -50%) rotateX(29deg) rotateY(269deg) rotateZ(185deg) translateZ(-106px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(29deg) rotateY(269deg) rotateZ(185deg) translateZ(-106px);
      transform: translate(-50%, -50%) rotateX(29deg) rotateY(269deg) rotateZ(185deg) translateZ(-106px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(4) {
    color: #f7300c;
    -webkit-clip-path: polygon(10% 0%, 20% 0%, 20% 50%);
    clip-path: polygon(10% 0%, 20% 0%, 20% 50%);
    -webkit-transform-origin: 5% -13%;
    transform-origin: 5% -13%;
    -webkit-animation: fly4 5000ms 120ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly4 5000ms 120ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly4 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-433deg) rotateY(186deg) rotateZ(500deg) translateZ(-2028px);
      transform: translate(-50%, -50%) rotateX(-433deg) rotateY(186deg) rotateZ(500deg) translateZ(-2028px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-433deg) rotateY(186deg) rotateZ(500deg) translateZ(-2028px);
      transform: translate(-50%, -50%) rotateX(-433deg) rotateY(186deg) rotateZ(500deg) translateZ(-2028px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly4 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-433deg) rotateY(186deg) rotateZ(500deg) translateZ(-2028px);
      transform: translate(-50%, -50%) rotateX(-433deg) rotateY(186deg) rotateZ(500deg) translateZ(-2028px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-433deg) rotateY(186deg) rotateZ(500deg) translateZ(-2028px);
      transform: translate(-50%, -50%) rotateX(-433deg) rotateY(186deg) rotateZ(500deg) translateZ(-2028px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(5) {
    color: #f5300f;
    -webkit-clip-path: polygon(20% 0%, 20% 50%, 30% 50%);
    clip-path: polygon(20% 0%, 20% 50%, 30% 50%);
    -webkit-transform-origin: 46% -22%;
    transform-origin: 46% -22%;
    -webkit-animation: fly5 5000ms 160ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly5 5000ms 160ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly5 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(7deg) rotateY(265deg) rotateZ(-8deg) translateZ(-1107px);
      transform: translate(-50%, -50%) rotateX(7deg) rotateY(265deg) rotateZ(-8deg) translateZ(-1107px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(7deg) rotateY(265deg) rotateZ(-8deg) translateZ(-1107px);
      transform: translate(-50%, -50%) rotateX(7deg) rotateY(265deg) rotateZ(-8deg) translateZ(-1107px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly5 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(7deg) rotateY(265deg) rotateZ(-8deg) translateZ(-1107px);
      transform: translate(-50%, -50%) rotateX(7deg) rotateY(265deg) rotateZ(-8deg) translateZ(-1107px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(7deg) rotateY(265deg) rotateZ(-8deg) translateZ(-1107px);
      transform: translate(-50%, -50%) rotateX(7deg) rotateY(265deg) rotateZ(-8deg) translateZ(-1107px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(6) {
    color: #f32f12;
    -webkit-clip-path: polygon(20% 0%, 30% 0%, 30% 50%);
    clip-path: polygon(20% 0%, 30% 0%, 30% 50%);
    -webkit-transform-origin: 62% -46%;
    transform-origin: 62% -46%;
    -webkit-animation: fly6 5000ms 200ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly6 5000ms 200ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly6 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-218deg) rotateY(128deg) rotateZ(-74deg) translateZ(-1468px);
      transform: translate(-50%, -50%) rotateX(-218deg) rotateY(128deg) rotateZ(-74deg) translateZ(-1468px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-218deg) rotateY(128deg) rotateZ(-74deg) translateZ(-1468px);
      transform: translate(-50%, -50%) rotateX(-218deg) rotateY(128deg) rotateZ(-74deg) translateZ(-1468px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly6 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-218deg) rotateY(128deg) rotateZ(-74deg) translateZ(-1468px);
      transform: translate(-50%, -50%) rotateX(-218deg) rotateY(128deg) rotateZ(-74deg) translateZ(-1468px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-218deg) rotateY(128deg) rotateZ(-74deg) translateZ(-1468px);
      transform: translate(-50%, -50%) rotateX(-218deg) rotateY(128deg) rotateZ(-74deg) translateZ(-1468px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(7) {
    color: #f12f15;
    -webkit-clip-path: polygon(30% 0%, 30% 50%, 40% 50%);
    clip-path: polygon(30% 0%, 30% 50%, 40% 50%);
    -webkit-transform-origin: 12% -36%;
    transform-origin: 12% -36%;
    -webkit-animation: fly7 5000ms 240ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly7 5000ms 240ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly7 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-377deg) rotateY(357deg) rotateZ(-36deg) translateZ(-2201px);
      transform: translate(-50%, -50%) rotateX(-377deg) rotateY(357deg) rotateZ(-36deg) translateZ(-2201px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-377deg) rotateY(357deg) rotateZ(-36deg) translateZ(-2201px);
      transform: translate(-50%, -50%) rotateX(-377deg) rotateY(357deg) rotateZ(-36deg) translateZ(-2201px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly7 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-377deg) rotateY(357deg) rotateZ(-36deg) translateZ(-2201px);
      transform: translate(-50%, -50%) rotateX(-377deg) rotateY(357deg) rotateZ(-36deg) translateZ(-2201px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-377deg) rotateY(357deg) rotateZ(-36deg) translateZ(-2201px);
      transform: translate(-50%, -50%) rotateX(-377deg) rotateY(357deg) rotateZ(-36deg) translateZ(-2201px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(8) {
    color: #ef2e18;
    -webkit-clip-path: polygon(30% 0%, 40% 0%, 40% 50%);
    clip-path: polygon(30% 0%, 40% 0%, 40% 50%);
    -webkit-transform-origin: 69% 7%;
    transform-origin: 69% 7%;
    -webkit-animation: fly8 5000ms 280ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly8 5000ms 280ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly8 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-231deg) rotateY(-146deg) rotateZ(69deg) translateZ(13px);
      transform: translate(-50%, -50%) rotateX(-231deg) rotateY(-146deg) rotateZ(69deg) translateZ(13px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-231deg) rotateY(-146deg) rotateZ(69deg) translateZ(13px);
      transform: translate(-50%, -50%) rotateX(-231deg) rotateY(-146deg) rotateZ(69deg) translateZ(13px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly8 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-231deg) rotateY(-146deg) rotateZ(69deg) translateZ(13px);
      transform: translate(-50%, -50%) rotateX(-231deg) rotateY(-146deg) rotateZ(69deg) translateZ(13px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-231deg) rotateY(-146deg) rotateZ(69deg) translateZ(13px);
      transform: translate(-50%, -50%) rotateX(-231deg) rotateY(-146deg) rotateZ(69deg) translateZ(13px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(9) {
    color: #ed2e1b;
    -webkit-clip-path: polygon(40% 0%, 40% 50%, 50% 50%);
    clip-path: polygon(40% 0%, 40% 50%, 50% 50%);
    -webkit-transform-origin: 37% 26%;
    transform-origin: 37% 26%;
    -webkit-animation: fly9 5000ms 320ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly9 5000ms 320ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly9 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-345deg) rotateY(-259deg) rotateZ(276deg) translateZ(111px);
      transform: translate(-50%, -50%) rotateX(-345deg) rotateY(-259deg) rotateZ(276deg) translateZ(111px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-345deg) rotateY(-259deg) rotateZ(276deg) translateZ(111px);
      transform: translate(-50%, -50%) rotateX(-345deg) rotateY(-259deg) rotateZ(276deg) translateZ(111px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly9 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-345deg) rotateY(-259deg) rotateZ(276deg) translateZ(111px);
      transform: translate(-50%, -50%) rotateX(-345deg) rotateY(-259deg) rotateZ(276deg) translateZ(111px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-345deg) rotateY(-259deg) rotateZ(276deg) translateZ(111px);
      transform: translate(-50%, -50%) rotateX(-345deg) rotateY(-259deg) rotateZ(276deg) translateZ(111px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(10) {
    color: #eb2d1e;
    -webkit-clip-path: polygon(40% 0%, 50% 0%, 50% 50%);
    clip-path: polygon(40% 0%, 50% 0%, 50% 50%);
    -webkit-transform-origin: 16% -11%;
    transform-origin: 16% -11%;
    -webkit-animation: fly10 5000ms 360ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly10 5000ms 360ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly10 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-460deg) rotateY(-473deg) rotateZ(-7deg) translateZ(-2023px);
      transform: translate(-50%, -50%) rotateX(-460deg) rotateY(-473deg) rotateZ(-7deg) translateZ(-2023px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-460deg) rotateY(-473deg) rotateZ(-7deg) translateZ(-2023px);
      transform: translate(-50%, -50%) rotateX(-460deg) rotateY(-473deg) rotateZ(-7deg) translateZ(-2023px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly10 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-460deg) rotateY(-473deg) rotateZ(-7deg) translateZ(-2023px);
      transform: translate(-50%, -50%) rotateX(-460deg) rotateY(-473deg) rotateZ(-7deg) translateZ(-2023px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-460deg) rotateY(-473deg) rotateZ(-7deg) translateZ(-2023px);
      transform: translate(-50%, -50%) rotateX(-460deg) rotateY(-473deg) rotateZ(-7deg) translateZ(-2023px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(11) {
    color: #e92d21;
    -webkit-clip-path: polygon(50% 0%, 50% 50%, 60% 50%);
    clip-path: polygon(50% 0%, 50% 50%, 60% 50%);
    -webkit-transform-origin: 61% 37%;
    transform-origin: 61% 37%;
    -webkit-animation: fly11 5000ms 400ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly11 5000ms 400ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly11 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-167deg) rotateY(-33deg) rotateZ(165deg) translateZ(-2070px);
      transform: translate(-50%, -50%) rotateX(-167deg) rotateY(-33deg) rotateZ(165deg) translateZ(-2070px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-167deg) rotateY(-33deg) rotateZ(165deg) translateZ(-2070px);
      transform: translate(-50%, -50%) rotateX(-167deg) rotateY(-33deg) rotateZ(165deg) translateZ(-2070px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly11 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-167deg) rotateY(-33deg) rotateZ(165deg) translateZ(-2070px);
      transform: translate(-50%, -50%) rotateX(-167deg) rotateY(-33deg) rotateZ(165deg) translateZ(-2070px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-167deg) rotateY(-33deg) rotateZ(165deg) translateZ(-2070px);
      transform: translate(-50%, -50%) rotateX(-167deg) rotateY(-33deg) rotateZ(165deg) translateZ(-2070px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(12) {
    color: #e72c24;
    -webkit-clip-path: polygon(50% 0%, 60% 0%, 60% 50%);
    clip-path: polygon(50% 0%, 60% 0%, 60% 50%);
    -webkit-transform-origin: 64% 26%;
    transform-origin: 64% 26%;
    -webkit-animation: fly12 5000ms 440ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly12 5000ms 440ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly12 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-213deg) rotateY(278deg) rotateZ(290deg) translateZ(-1112px);
      transform: translate(-50%, -50%) rotateX(-213deg) rotateY(278deg) rotateZ(290deg) translateZ(-1112px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-213deg) rotateY(278deg) rotateZ(290deg) translateZ(-1112px);
      transform: translate(-50%, -50%) rotateX(-213deg) rotateY(278deg) rotateZ(290deg) translateZ(-1112px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly12 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-213deg) rotateY(278deg) rotateZ(290deg) translateZ(-1112px);
      transform: translate(-50%, -50%) rotateX(-213deg) rotateY(278deg) rotateZ(290deg) translateZ(-1112px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-213deg) rotateY(278deg) rotateZ(290deg) translateZ(-1112px);
      transform: translate(-50%, -50%) rotateX(-213deg) rotateY(278deg) rotateZ(290deg) translateZ(-1112px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(13) {
    color: #e52c27;
    -webkit-clip-path: polygon(60% 0%, 60% 50%, 70% 50%);
    clip-path: polygon(60% 0%, 60% 50%, 70% 50%);
    -webkit-transform-origin: 35% -20%;
    transform-origin: 35% -20%;
    -webkit-animation: fly13 5000ms 480ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly13 5000ms 480ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly13 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(23deg) rotateY(-55deg) rotateZ(-210deg) translateZ(-1386px);
      transform: translate(-50%, -50%) rotateX(23deg) rotateY(-55deg) rotateZ(-210deg) translateZ(-1386px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(23deg) rotateY(-55deg) rotateZ(-210deg) translateZ(-1386px);
      transform: translate(-50%, -50%) rotateX(23deg) rotateY(-55deg) rotateZ(-210deg) translateZ(-1386px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly13 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(23deg) rotateY(-55deg) rotateZ(-210deg) translateZ(-1386px);
      transform: translate(-50%, -50%) rotateX(23deg) rotateY(-55deg) rotateZ(-210deg) translateZ(-1386px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(23deg) rotateY(-55deg) rotateZ(-210deg) translateZ(-1386px);
      transform: translate(-50%, -50%) rotateX(23deg) rotateY(-55deg) rotateZ(-210deg) translateZ(-1386px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(14) {
    color: #e32b2a;
    -webkit-clip-path: polygon(60% 0%, 70% 0%, 70% 50%);
    clip-path: polygon(60% 0%, 70% 0%, 70% 50%);
    -webkit-transform-origin: 23% 2%;
    transform-origin: 23% 2%;
    -webkit-animation: fly14 5000ms 520ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly14 5000ms 520ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly14 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(312deg) rotateY(-56deg) rotateZ(-251deg) translateZ(-1247px);
      transform: translate(-50%, -50%) rotateX(312deg) rotateY(-56deg) rotateZ(-251deg) translateZ(-1247px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(312deg) rotateY(-56deg) rotateZ(-251deg) translateZ(-1247px);
      transform: translate(-50%, -50%) rotateX(312deg) rotateY(-56deg) rotateZ(-251deg) translateZ(-1247px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly14 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(312deg) rotateY(-56deg) rotateZ(-251deg) translateZ(-1247px);
      transform: translate(-50%, -50%) rotateX(312deg) rotateY(-56deg) rotateZ(-251deg) translateZ(-1247px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(312deg) rotateY(-56deg) rotateZ(-251deg) translateZ(-1247px);
      transform: translate(-50%, -50%) rotateX(312deg) rotateY(-56deg) rotateZ(-251deg) translateZ(-1247px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(15) {
    color: #e12b2d;
    -webkit-clip-path: polygon(70% 0%, 70% 50%, 80% 50%);
    clip-path: polygon(70% 0%, 70% 50%, 80% 50%);
    -webkit-transform-origin: 94% -13%;
    transform-origin: 94% -13%;
    -webkit-animation: fly15 5000ms 560ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly15 5000ms 560ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly15 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-8deg) rotateY(227deg) rotateZ(-63deg) translateZ(-1939px);
      transform: translate(-50%, -50%) rotateX(-8deg) rotateY(227deg) rotateZ(-63deg) translateZ(-1939px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-8deg) rotateY(227deg) rotateZ(-63deg) translateZ(-1939px);
      transform: translate(-50%, -50%) rotateX(-8deg) rotateY(227deg) rotateZ(-63deg) translateZ(-1939px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly15 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-8deg) rotateY(227deg) rotateZ(-63deg) translateZ(-1939px);
      transform: translate(-50%, -50%) rotateX(-8deg) rotateY(227deg) rotateZ(-63deg) translateZ(-1939px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-8deg) rotateY(227deg) rotateZ(-63deg) translateZ(-1939px);
      transform: translate(-50%, -50%) rotateX(-8deg) rotateY(227deg) rotateZ(-63deg) translateZ(-1939px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(16) {
    color: #df2a30;
    -webkit-clip-path: polygon(70% 0%, 80% 0%, 80% 50%);
    clip-path: polygon(70% 0%, 80% 0%, 80% 50%);
    -webkit-transform-origin: 22% -2%;
    transform-origin: 22% -2%;
    -webkit-animation: fly16 5000ms 600ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly16 5000ms 600ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly16 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-107deg) rotateY(-344deg) rotateZ(236deg) translateZ(-48px);
      transform: translate(-50%, -50%) rotateX(-107deg) rotateY(-344deg) rotateZ(236deg) translateZ(-48px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-107deg) rotateY(-344deg) rotateZ(236deg) translateZ(-48px);
      transform: translate(-50%, -50%) rotateX(-107deg) rotateY(-344deg) rotateZ(236deg) translateZ(-48px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly16 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-107deg) rotateY(-344deg) rotateZ(236deg) translateZ(-48px);
      transform: translate(-50%, -50%) rotateX(-107deg) rotateY(-344deg) rotateZ(236deg) translateZ(-48px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-107deg) rotateY(-344deg) rotateZ(236deg) translateZ(-48px);
      transform: translate(-50%, -50%) rotateX(-107deg) rotateY(-344deg) rotateZ(236deg) translateZ(-48px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(17) {
    color: #dd2a33;
    -webkit-clip-path: polygon(80% 0%, 80% 50%, 90% 50%);
    clip-path: polygon(80% 0%, 80% 50%, 90% 50%);
    -webkit-transform-origin: 37% -1%;
    transform-origin: 37% -1%;
    -webkit-animation: fly17 5000ms 640ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly17 5000ms 640ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly17 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(500deg) rotateY(174deg) rotateZ(-286deg) translateZ(-1168px);
      transform: translate(-50%, -50%) rotateX(500deg) rotateY(174deg) rotateZ(-286deg) translateZ(-1168px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(500deg) rotateY(174deg) rotateZ(-286deg) translateZ(-1168px);
      transform: translate(-50%, -50%) rotateX(500deg) rotateY(174deg) rotateZ(-286deg) translateZ(-1168px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly17 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(500deg) rotateY(174deg) rotateZ(-286deg) translateZ(-1168px);
      transform: translate(-50%, -50%) rotateX(500deg) rotateY(174deg) rotateZ(-286deg) translateZ(-1168px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(500deg) rotateY(174deg) rotateZ(-286deg) translateZ(-1168px);
      transform: translate(-50%, -50%) rotateX(500deg) rotateY(174deg) rotateZ(-286deg) translateZ(-1168px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(18) {
    color: #db2936;
    -webkit-clip-path: polygon(80% 0%, 90% 0%, 90% 50%);
    clip-path: polygon(80% 0%, 90% 0%, 90% 50%);
    -webkit-transform-origin: 101% -42%;
    transform-origin: 101% -42%;
    -webkit-animation: fly18 5000ms 680ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly18 5000ms 680ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly18 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(317deg) rotateY(346deg) rotateZ(-471deg) translateZ(-2058px);
      transform: translate(-50%, -50%) rotateX(317deg) rotateY(346deg) rotateZ(-471deg) translateZ(-2058px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(317deg) rotateY(346deg) rotateZ(-471deg) translateZ(-2058px);
      transform: translate(-50%, -50%) rotateX(317deg) rotateY(346deg) rotateZ(-471deg) translateZ(-2058px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly18 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(317deg) rotateY(346deg) rotateZ(-471deg) translateZ(-2058px);
      transform: translate(-50%, -50%) rotateX(317deg) rotateY(346deg) rotateZ(-471deg) translateZ(-2058px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(317deg) rotateY(346deg) rotateZ(-471deg) translateZ(-2058px);
      transform: translate(-50%, -50%) rotateX(317deg) rotateY(346deg) rotateZ(-471deg) translateZ(-2058px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(19) {
    color: #d92939;
    -webkit-clip-path: polygon(90% 0%, 90% 50%, 100% 50%);
    clip-path: polygon(90% 0%, 90% 50%, 100% 50%);
    -webkit-transform-origin: 79% 42%;
    transform-origin: 79% 42%;
    -webkit-animation: fly19 5000ms 720ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly19 5000ms 720ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly19 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(234deg) rotateY(-222deg) rotateZ(11deg) translateZ(-800px);
      transform: translate(-50%, -50%) rotateX(234deg) rotateY(-222deg) rotateZ(11deg) translateZ(-800px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(234deg) rotateY(-222deg) rotateZ(11deg) translateZ(-800px);
      transform: translate(-50%, -50%) rotateX(234deg) rotateY(-222deg) rotateZ(11deg) translateZ(-800px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly19 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(234deg) rotateY(-222deg) rotateZ(11deg) translateZ(-800px);
      transform: translate(-50%, -50%) rotateX(234deg) rotateY(-222deg) rotateZ(11deg) translateZ(-800px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(234deg) rotateY(-222deg) rotateZ(11deg) translateZ(-800px);
      transform: translate(-50%, -50%) rotateX(234deg) rotateY(-222deg) rotateZ(11deg) translateZ(-800px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(20) {
    color: #d7283c;
    -webkit-clip-path: polygon(90% 0%, 100% 0%, 100% 50%);
    clip-path: polygon(90% 0%, 100% 0%, 100% 50%);
    -webkit-transform-origin: 124% -30%;
    transform-origin: 124% -30%;
    -webkit-animation: fly20 5000ms 760ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly20 5000ms 760ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly20 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-496deg) rotateY(-450deg) rotateZ(-305deg) translateZ(-1885px);
      transform: translate(-50%, -50%) rotateX(-496deg) rotateY(-450deg) rotateZ(-305deg) translateZ(-1885px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-496deg) rotateY(-450deg) rotateZ(-305deg) translateZ(-1885px);
      transform: translate(-50%, -50%) rotateX(-496deg) rotateY(-450deg) rotateZ(-305deg) translateZ(-1885px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly20 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-496deg) rotateY(-450deg) rotateZ(-305deg) translateZ(-1885px);
      transform: translate(-50%, -50%) rotateX(-496deg) rotateY(-450deg) rotateZ(-305deg) translateZ(-1885px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-496deg) rotateY(-450deg) rotateZ(-305deg) translateZ(-1885px);
      transform: translate(-50%, -50%) rotateX(-496deg) rotateY(-450deg) rotateZ(-305deg) translateZ(-1885px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(21) {
    color: #d5283f;
    -webkit-clip-path: polygon(0% 50%, 0% 100%, 10% 100%);
    clip-path: polygon(0% 50%, 0% 100%, 10% 100%);
    -webkit-transform-origin: -36% 4%;
    transform-origin: -36% 4%;
    -webkit-animation: fly21 5000ms 800ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly21 5000ms 800ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly21 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(379deg) rotateY(-171deg) rotateZ(286deg) translateZ(-1979px);
      transform: translate(-50%, -50%) rotateX(379deg) rotateY(-171deg) rotateZ(286deg) translateZ(-1979px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(379deg) rotateY(-171deg) rotateZ(286deg) translateZ(-1979px);
      transform: translate(-50%, -50%) rotateX(379deg) rotateY(-171deg) rotateZ(286deg) translateZ(-1979px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly21 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(379deg) rotateY(-171deg) rotateZ(286deg) translateZ(-1979px);
      transform: translate(-50%, -50%) rotateX(379deg) rotateY(-171deg) rotateZ(286deg) translateZ(-1979px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(379deg) rotateY(-171deg) rotateZ(286deg) translateZ(-1979px);
      transform: translate(-50%, -50%) rotateX(379deg) rotateY(-171deg) rotateZ(286deg) translateZ(-1979px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(22) {
    color: #d32742;
    -webkit-clip-path: polygon(0% 50%, 10% 50%, 10% 100%);
    clip-path: polygon(0% 50%, 10% 50%, 10% 100%);
    -webkit-transform-origin: 46% 32%;
    transform-origin: 46% 32%;
    -webkit-animation: fly22 5000ms 840ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly22 5000ms 840ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly22 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-117deg) rotateY(-132deg) rotateZ(178deg) translateZ(-749px);
      transform: translate(-50%, -50%) rotateX(-117deg) rotateY(-132deg) rotateZ(178deg) translateZ(-749px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-117deg) rotateY(-132deg) rotateZ(178deg) translateZ(-749px);
      transform: translate(-50%, -50%) rotateX(-117deg) rotateY(-132deg) rotateZ(178deg) translateZ(-749px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly22 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-117deg) rotateY(-132deg) rotateZ(178deg) translateZ(-749px);
      transform: translate(-50%, -50%) rotateX(-117deg) rotateY(-132deg) rotateZ(178deg) translateZ(-749px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-117deg) rotateY(-132deg) rotateZ(178deg) translateZ(-749px);
      transform: translate(-50%, -50%) rotateX(-117deg) rotateY(-132deg) rotateZ(178deg) translateZ(-749px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(23) {
    color: #d12745;
    -webkit-clip-path: polygon(10% 50%, 10% 100%, 20% 100%);
    clip-path: polygon(10% 50%, 10% 100%, 20% 100%);
    -webkit-transform-origin: -19% 37%;
    transform-origin: -19% 37%;
    -webkit-animation: fly23 5000ms 880ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly23 5000ms 880ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly23 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(35deg) rotateY(198deg) rotateZ(-109deg) translateZ(-1151px);
      transform: translate(-50%, -50%) rotateX(35deg) rotateY(198deg) rotateZ(-109deg) translateZ(-1151px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(35deg) rotateY(198deg) rotateZ(-109deg) translateZ(-1151px);
      transform: translate(-50%, -50%) rotateX(35deg) rotateY(198deg) rotateZ(-109deg) translateZ(-1151px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly23 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(35deg) rotateY(198deg) rotateZ(-109deg) translateZ(-1151px);
      transform: translate(-50%, -50%) rotateX(35deg) rotateY(198deg) rotateZ(-109deg) translateZ(-1151px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(35deg) rotateY(198deg) rotateZ(-109deg) translateZ(-1151px);
      transform: translate(-50%, -50%) rotateX(35deg) rotateY(198deg) rotateZ(-109deg) translateZ(-1151px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(24) {
    color: #cf2648;
    -webkit-clip-path: polygon(10% 50%, 20% 50%, 20% 100%);
    clip-path: polygon(10% 50%, 20% 50%, 20% 100%);
    -webkit-transform-origin: 13% 82%;
    transform-origin: 13% 82%;
    -webkit-animation: fly24 5000ms 920ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly24 5000ms 920ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly24 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(146deg) rotateY(193deg) rotateZ(-361deg) translateZ(-2482px);
      transform: translate(-50%, -50%) rotateX(146deg) rotateY(193deg) rotateZ(-361deg) translateZ(-2482px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(146deg) rotateY(193deg) rotateZ(-361deg) translateZ(-2482px);
      transform: translate(-50%, -50%) rotateX(146deg) rotateY(193deg) rotateZ(-361deg) translateZ(-2482px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly24 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(146deg) rotateY(193deg) rotateZ(-361deg) translateZ(-2482px);
      transform: translate(-50%, -50%) rotateX(146deg) rotateY(193deg) rotateZ(-361deg) translateZ(-2482px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(146deg) rotateY(193deg) rotateZ(-361deg) translateZ(-2482px);
      transform: translate(-50%, -50%) rotateX(146deg) rotateY(193deg) rotateZ(-361deg) translateZ(-2482px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(25) {
    color: #cd264b;
    -webkit-clip-path: polygon(20% 50%, 20% 100%, 30% 100%);
    clip-path: polygon(20% 50%, 20% 100%, 30% 100%);
    -webkit-transform-origin: 68% 51%;
    transform-origin: 68% 51%;
    -webkit-animation: fly25 5000ms 960ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly25 5000ms 960ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly25 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(268deg) rotateY(487deg) rotateZ(-298deg) translateZ(-1127px);
      transform: translate(-50%, -50%) rotateX(268deg) rotateY(487deg) rotateZ(-298deg) translateZ(-1127px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(268deg) rotateY(487deg) rotateZ(-298deg) translateZ(-1127px);
      transform: translate(-50%, -50%) rotateX(268deg) rotateY(487deg) rotateZ(-298deg) translateZ(-1127px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly25 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(268deg) rotateY(487deg) rotateZ(-298deg) translateZ(-1127px);
      transform: translate(-50%, -50%) rotateX(268deg) rotateY(487deg) rotateZ(-298deg) translateZ(-1127px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(268deg) rotateY(487deg) rotateZ(-298deg) translateZ(-1127px);
      transform: translate(-50%, -50%) rotateX(268deg) rotateY(487deg) rotateZ(-298deg) translateZ(-1127px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(26) {
    color: #cb254e;
    -webkit-clip-path: polygon(20% 50%, 30% 50%, 30% 100%);
    clip-path: polygon(20% 50%, 30% 50%, 30% 100%);
    -webkit-transform-origin: 1% 78%;
    transform-origin: 1% 78%;
    -webkit-animation: fly26 5000ms 1000ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly26 5000ms 1000ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly26 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-19deg) rotateY(-204deg) rotateZ(26deg) translateZ(-1px);
      transform: translate(-50%, -50%) rotateX(-19deg) rotateY(-204deg) rotateZ(26deg) translateZ(-1px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-19deg) rotateY(-204deg) rotateZ(26deg) translateZ(-1px);
      transform: translate(-50%, -50%) rotateX(-19deg) rotateY(-204deg) rotateZ(26deg) translateZ(-1px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly26 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-19deg) rotateY(-204deg) rotateZ(26deg) translateZ(-1px);
      transform: translate(-50%, -50%) rotateX(-19deg) rotateY(-204deg) rotateZ(26deg) translateZ(-1px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-19deg) rotateY(-204deg) rotateZ(26deg) translateZ(-1px);
      transform: translate(-50%, -50%) rotateX(-19deg) rotateY(-204deg) rotateZ(26deg) translateZ(-1px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(27) {
    color: #c92551;
    -webkit-clip-path: polygon(30% 50%, 30% 100%, 40% 100%);
    clip-path: polygon(30% 50%, 30% 100%, 40% 100%);
    -webkit-transform-origin: 16% 22%;
    transform-origin: 16% 22%;
    -webkit-animation: fly27 5000ms 1040ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly27 5000ms 1040ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly27 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-465deg) rotateY(-165deg) rotateZ(289deg) translateZ(-1154px);
      transform: translate(-50%, -50%) rotateX(-465deg) rotateY(-165deg) rotateZ(289deg) translateZ(-1154px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-465deg) rotateY(-165deg) rotateZ(289deg) translateZ(-1154px);
      transform: translate(-50%, -50%) rotateX(-465deg) rotateY(-165deg) rotateZ(289deg) translateZ(-1154px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly27 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-465deg) rotateY(-165deg) rotateZ(289deg) translateZ(-1154px);
      transform: translate(-50%, -50%) rotateX(-465deg) rotateY(-165deg) rotateZ(289deg) translateZ(-1154px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-465deg) rotateY(-165deg) rotateZ(289deg) translateZ(-1154px);
      transform: translate(-50%, -50%) rotateX(-465deg) rotateY(-165deg) rotateZ(289deg) translateZ(-1154px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(28) {
    color: #c72454;
    -webkit-clip-path: polygon(30% 50%, 40% 50%, 40% 100%);
    clip-path: polygon(30% 50%, 40% 50%, 40% 100%);
    -webkit-transform-origin: 71% 88%;
    transform-origin: 71% 88%;
    -webkit-animation: fly28 5000ms 1080ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly28 5000ms 1080ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly28 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-484deg) rotateY(-231deg) rotateZ(364deg) translateZ(-1703px);
      transform: translate(-50%, -50%) rotateX(-484deg) rotateY(-231deg) rotateZ(364deg) translateZ(-1703px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-484deg) rotateY(-231deg) rotateZ(364deg) translateZ(-1703px);
      transform: translate(-50%, -50%) rotateX(-484deg) rotateY(-231deg) rotateZ(364deg) translateZ(-1703px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly28 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-484deg) rotateY(-231deg) rotateZ(364deg) translateZ(-1703px);
      transform: translate(-50%, -50%) rotateX(-484deg) rotateY(-231deg) rotateZ(364deg) translateZ(-1703px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-484deg) rotateY(-231deg) rotateZ(364deg) translateZ(-1703px);
      transform: translate(-50%, -50%) rotateX(-484deg) rotateY(-231deg) rotateZ(364deg) translateZ(-1703px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(29) {
    color: #c52457;
    -webkit-clip-path: polygon(40% 50%, 40% 100%, 50% 100%);
    clip-path: polygon(40% 50%, 40% 100%, 50% 100%);
    -webkit-transform-origin: 17% 30%;
    transform-origin: 17% 30%;
    -webkit-animation: fly29 5000ms 1120ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly29 5000ms 1120ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly29 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-79deg) rotateY(156deg) rotateZ(447deg) translateZ(-323px);
      transform: translate(-50%, -50%) rotateX(-79deg) rotateY(156deg) rotateZ(447deg) translateZ(-323px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-79deg) rotateY(156deg) rotateZ(447deg) translateZ(-323px);
      transform: translate(-50%, -50%) rotateX(-79deg) rotateY(156deg) rotateZ(447deg) translateZ(-323px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly29 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-79deg) rotateY(156deg) rotateZ(447deg) translateZ(-323px);
      transform: translate(-50%, -50%) rotateX(-79deg) rotateY(156deg) rotateZ(447deg) translateZ(-323px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-79deg) rotateY(156deg) rotateZ(447deg) translateZ(-323px);
      transform: translate(-50%, -50%) rotateX(-79deg) rotateY(156deg) rotateZ(447deg) translateZ(-323px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(30) {
    color: #c3235a;
    -webkit-clip-path: polygon(40% 50%, 50% 50%, 50% 100%);
    clip-path: polygon(40% 50%, 50% 50%, 50% 100%);
    -webkit-transform-origin: 68% 66%;
    transform-origin: 68% 66%;
    -webkit-animation: fly30 5000ms 1160ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly30 5000ms 1160ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly30 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-11deg) rotateY(-458deg) rotateZ(491deg) translateZ(-1068px);
      transform: translate(-50%, -50%) rotateX(-11deg) rotateY(-458deg) rotateZ(491deg) translateZ(-1068px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-11deg) rotateY(-458deg) rotateZ(491deg) translateZ(-1068px);
      transform: translate(-50%, -50%) rotateX(-11deg) rotateY(-458deg) rotateZ(491deg) translateZ(-1068px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly30 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-11deg) rotateY(-458deg) rotateZ(491deg) translateZ(-1068px);
      transform: translate(-50%, -50%) rotateX(-11deg) rotateY(-458deg) rotateZ(491deg) translateZ(-1068px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-11deg) rotateY(-458deg) rotateZ(491deg) translateZ(-1068px);
      transform: translate(-50%, -50%) rotateX(-11deg) rotateY(-458deg) rotateZ(491deg) translateZ(-1068px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(31) {
    color: #c1235d;
    -webkit-clip-path: polygon(50% 50%, 50% 100%, 60% 100%);
    clip-path: polygon(50% 50%, 50% 100%, 60% 100%);
    -webkit-transform-origin: 25% 37%;
    transform-origin: 25% 37%;
    -webkit-animation: fly31 5000ms 1200ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly31 5000ms 1200ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly31 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-118deg) rotateY(-291deg) rotateZ(387deg) translateZ(-2187px);
      transform: translate(-50%, -50%) rotateX(-118deg) rotateY(-291deg) rotateZ(387deg) translateZ(-2187px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-118deg) rotateY(-291deg) rotateZ(387deg) translateZ(-2187px);
      transform: translate(-50%, -50%) rotateX(-118deg) rotateY(-291deg) rotateZ(387deg) translateZ(-2187px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly31 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-118deg) rotateY(-291deg) rotateZ(387deg) translateZ(-2187px);
      transform: translate(-50%, -50%) rotateX(-118deg) rotateY(-291deg) rotateZ(387deg) translateZ(-2187px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-118deg) rotateY(-291deg) rotateZ(387deg) translateZ(-2187px);
      transform: translate(-50%, -50%) rotateX(-118deg) rotateY(-291deg) rotateZ(387deg) translateZ(-2187px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(32) {
    color: #bf2260;
    -webkit-clip-path: polygon(50% 50%, 60% 50%, 60% 100%);
    clip-path: polygon(50% 50%, 60% 50%, 60% 100%);
    -webkit-transform-origin: 98% 95%;
    transform-origin: 98% 95%;
    -webkit-animation: fly32 5000ms 1240ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly32 5000ms 1240ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly32 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(194deg) rotateY(254deg) rotateZ(-138deg) translateZ(-2469px);
      transform: translate(-50%, -50%) rotateX(194deg) rotateY(254deg) rotateZ(-138deg) translateZ(-2469px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(194deg) rotateY(254deg) rotateZ(-138deg) translateZ(-2469px);
      transform: translate(-50%, -50%) rotateX(194deg) rotateY(254deg) rotateZ(-138deg) translateZ(-2469px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly32 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(194deg) rotateY(254deg) rotateZ(-138deg) translateZ(-2469px);
      transform: translate(-50%, -50%) rotateX(194deg) rotateY(254deg) rotateZ(-138deg) translateZ(-2469px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(194deg) rotateY(254deg) rotateZ(-138deg) translateZ(-2469px);
      transform: translate(-50%, -50%) rotateX(194deg) rotateY(254deg) rotateZ(-138deg) translateZ(-2469px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(33) {
    color: #bd2263;
    -webkit-clip-path: polygon(60% 50%, 60% 100%, 70% 100%);
    clip-path: polygon(60% 50%, 60% 100%, 70% 100%);
    -webkit-transform-origin: 32% 8%;
    transform-origin: 32% 8%;
    -webkit-animation: fly33 5000ms 1280ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly33 5000ms 1280ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly33 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(45deg) rotateY(488deg) rotateZ(-166deg) translateZ(-2373px);
      transform: translate(-50%, -50%) rotateX(45deg) rotateY(488deg) rotateZ(-166deg) translateZ(-2373px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(45deg) rotateY(488deg) rotateZ(-166deg) translateZ(-2373px);
      transform: translate(-50%, -50%) rotateX(45deg) rotateY(488deg) rotateZ(-166deg) translateZ(-2373px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly33 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(45deg) rotateY(488deg) rotateZ(-166deg) translateZ(-2373px);
      transform: translate(-50%, -50%) rotateX(45deg) rotateY(488deg) rotateZ(-166deg) translateZ(-2373px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(45deg) rotateY(488deg) rotateZ(-166deg) translateZ(-2373px);
      transform: translate(-50%, -50%) rotateX(45deg) rotateY(488deg) rotateZ(-166deg) translateZ(-2373px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(34) {
    color: #bb2166;
    -webkit-clip-path: polygon(60% 50%, 70% 50%, 70% 100%);
    clip-path: polygon(60% 50%, 70% 50%, 70% 100%);
    -webkit-transform-origin: 41% 13%;
    transform-origin: 41% 13%;
    -webkit-animation: fly34 5000ms 1320ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly34 5000ms 1320ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly34 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-72deg) rotateY(-172deg) rotateZ(-141deg) translateZ(293px);
      transform: translate(-50%, -50%) rotateX(-72deg) rotateY(-172deg) rotateZ(-141deg) translateZ(293px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-72deg) rotateY(-172deg) rotateZ(-141deg) translateZ(293px);
      transform: translate(-50%, -50%) rotateX(-72deg) rotateY(-172deg) rotateZ(-141deg) translateZ(293px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly34 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-72deg) rotateY(-172deg) rotateZ(-141deg) translateZ(293px);
      transform: translate(-50%, -50%) rotateX(-72deg) rotateY(-172deg) rotateZ(-141deg) translateZ(293px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-72deg) rotateY(-172deg) rotateZ(-141deg) translateZ(293px);
      transform: translate(-50%, -50%) rotateX(-72deg) rotateY(-172deg) rotateZ(-141deg) translateZ(293px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(35) {
    color: #b92169;
    -webkit-clip-path: polygon(70% 50%, 70% 100%, 80% 100%);
    clip-path: polygon(70% 50%, 70% 100%, 80% 100%);
    -webkit-transform-origin: 32% 28%;
    transform-origin: 32% 28%;
    -webkit-animation: fly35 5000ms 1360ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly35 5000ms 1360ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly35 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-393deg) rotateY(2deg) rotateZ(87deg) translateZ(-851px);
      transform: translate(-50%, -50%) rotateX(-393deg) rotateY(2deg) rotateZ(87deg) translateZ(-851px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-393deg) rotateY(2deg) rotateZ(87deg) translateZ(-851px);
      transform: translate(-50%, -50%) rotateX(-393deg) rotateY(2deg) rotateZ(87deg) translateZ(-851px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly35 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-393deg) rotateY(2deg) rotateZ(87deg) translateZ(-851px);
      transform: translate(-50%, -50%) rotateX(-393deg) rotateY(2deg) rotateZ(87deg) translateZ(-851px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-393deg) rotateY(2deg) rotateZ(87deg) translateZ(-851px);
      transform: translate(-50%, -50%) rotateX(-393deg) rotateY(2deg) rotateZ(87deg) translateZ(-851px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(36) {
    color: #b7206c;
    -webkit-clip-path: polygon(70% 50%, 80% 50%, 80% 100%);
    clip-path: polygon(70% 50%, 80% 50%, 80% 100%);
    -webkit-transform-origin: 114% 43%;
    transform-origin: 114% 43%;
    -webkit-animation: fly36 5000ms 1400ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly36 5000ms 1400ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly36 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-484deg) rotateY(-474deg) rotateZ(388deg) translateZ(-502px);
      transform: translate(-50%, -50%) rotateX(-484deg) rotateY(-474deg) rotateZ(388deg) translateZ(-502px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-484deg) rotateY(-474deg) rotateZ(388deg) translateZ(-502px);
      transform: translate(-50%, -50%) rotateX(-484deg) rotateY(-474deg) rotateZ(388deg) translateZ(-502px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly36 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-484deg) rotateY(-474deg) rotateZ(388deg) translateZ(-502px);
      transform: translate(-50%, -50%) rotateX(-484deg) rotateY(-474deg) rotateZ(388deg) translateZ(-502px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-484deg) rotateY(-474deg) rotateZ(388deg) translateZ(-502px);
      transform: translate(-50%, -50%) rotateX(-484deg) rotateY(-474deg) rotateZ(388deg) translateZ(-502px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(37) {
    color: #b5206f;
    -webkit-clip-path: polygon(80% 50%, 80% 100%, 90% 100%);
    clip-path: polygon(80% 50%, 80% 100%, 90% 100%);
    -webkit-transform-origin: 77% 28%;
    transform-origin: 77% 28%;
    -webkit-animation: fly37 5000ms 1440ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly37 5000ms 1440ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly37 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-339deg) rotateY(105deg) rotateZ(470deg) translateZ(-1071px);
      transform: translate(-50%, -50%) rotateX(-339deg) rotateY(105deg) rotateZ(470deg) translateZ(-1071px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-339deg) rotateY(105deg) rotateZ(470deg) translateZ(-1071px);
      transform: translate(-50%, -50%) rotateX(-339deg) rotateY(105deg) rotateZ(470deg) translateZ(-1071px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly37 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-339deg) rotateY(105deg) rotateZ(470deg) translateZ(-1071px);
      transform: translate(-50%, -50%) rotateX(-339deg) rotateY(105deg) rotateZ(470deg) translateZ(-1071px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-339deg) rotateY(105deg) rotateZ(470deg) translateZ(-1071px);
      transform: translate(-50%, -50%) rotateX(-339deg) rotateY(105deg) rotateZ(470deg) translateZ(-1071px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(38) {
    color: #b31f72;
    -webkit-clip-path: polygon(80% 50%, 90% 50%, 90% 100%);
    clip-path: polygon(80% 50%, 90% 50%, 90% 100%);
    -webkit-transform-origin: 117% 40%;
    transform-origin: 117% 40%;
    -webkit-animation: fly38 5000ms 1480ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly38 5000ms 1480ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly38 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-194deg) rotateY(-83deg) rotateZ(-277deg) translateZ(-300px);
      transform: translate(-50%, -50%) rotateX(-194deg) rotateY(-83deg) rotateZ(-277deg) translateZ(-300px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-194deg) rotateY(-83deg) rotateZ(-277deg) translateZ(-300px);
      transform: translate(-50%, -50%) rotateX(-194deg) rotateY(-83deg) rotateZ(-277deg) translateZ(-300px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly38 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-194deg) rotateY(-83deg) rotateZ(-277deg) translateZ(-300px);
      transform: translate(-50%, -50%) rotateX(-194deg) rotateY(-83deg) rotateZ(-277deg) translateZ(-300px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-194deg) rotateY(-83deg) rotateZ(-277deg) translateZ(-300px);
      transform: translate(-50%, -50%) rotateX(-194deg) rotateY(-83deg) rotateZ(-277deg) translateZ(-300px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(39) {
    color: #b11f75;
    -webkit-clip-path: polygon(90% 50%, 90% 100%, 100% 100%);
    clip-path: polygon(90% 50%, 90% 100%, 100% 100%);
    -webkit-transform-origin: 97% 61%;
    transform-origin: 97% 61%;
    -webkit-animation: fly39 5000ms 1520ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly39 5000ms 1520ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly39 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(223deg) rotateY(9deg) rotateZ(-40deg) translateZ(-411px);
      transform: translate(-50%, -50%) rotateX(223deg) rotateY(9deg) rotateZ(-40deg) translateZ(-411px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(223deg) rotateY(9deg) rotateZ(-40deg) translateZ(-411px);
      transform: translate(-50%, -50%) rotateX(223deg) rotateY(9deg) rotateZ(-40deg) translateZ(-411px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly39 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(223deg) rotateY(9deg) rotateZ(-40deg) translateZ(-411px);
      transform: translate(-50%, -50%) rotateX(223deg) rotateY(9deg) rotateZ(-40deg) translateZ(-411px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(223deg) rotateY(9deg) rotateZ(-40deg) translateZ(-411px);
      transform: translate(-50%, -50%) rotateX(223deg) rotateY(9deg) rotateZ(-40deg) translateZ(-411px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(40) {
    color: #af1e78;
    -webkit-clip-path: polygon(90% 50%, 100% 50%, 100% 100%);
    clip-path: polygon(90% 50%, 100% 50%, 100% 100%);
    -webkit-transform-origin: 50% 15%;
    transform-origin: 50% 15%;
    -webkit-animation: fly40 5000ms 1560ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly40 5000ms 1560ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly40 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-50deg) rotateY(147deg) rotateZ(149deg) translateZ(57px);
      transform: translate(-50%, -50%) rotateX(-50deg) rotateY(147deg) rotateZ(149deg) translateZ(57px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-50deg) rotateY(147deg) rotateZ(149deg) translateZ(57px);
      transform: translate(-50%, -50%) rotateX(-50deg) rotateY(147deg) rotateZ(149deg) translateZ(57px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly40 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-50deg) rotateY(147deg) rotateZ(149deg) translateZ(57px);
      transform: translate(-50%, -50%) rotateX(-50deg) rotateY(147deg) rotateZ(149deg) translateZ(57px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-50deg) rotateY(147deg) rotateZ(149deg) translateZ(57px);
      transform: translate(-50%, -50%) rotateX(-50deg) rotateY(147deg) rotateZ(149deg) translateZ(57px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(41) {
    color: #ad1e7b;
    -webkit-clip-path: polygon(0% 100%, 0% 150%, 10% 150%);
    clip-path: polygon(0% 100%, 0% 150%, 10% 150%);
    -webkit-transform-origin: -47% 84%;
    transform-origin: -47% 84%;
    -webkit-animation: fly41 5000ms 1600ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly41 5000ms 1600ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly41 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(357deg) rotateY(251deg) rotateZ(425deg) translateZ(-1252px);
      transform: translate(-50%, -50%) rotateX(357deg) rotateY(251deg) rotateZ(425deg) translateZ(-1252px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(357deg) rotateY(251deg) rotateZ(425deg) translateZ(-1252px);
      transform: translate(-50%, -50%) rotateX(357deg) rotateY(251deg) rotateZ(425deg) translateZ(-1252px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly41 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(357deg) rotateY(251deg) rotateZ(425deg) translateZ(-1252px);
      transform: translate(-50%, -50%) rotateX(357deg) rotateY(251deg) rotateZ(425deg) translateZ(-1252px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(357deg) rotateY(251deg) rotateZ(425deg) translateZ(-1252px);
      transform: translate(-50%, -50%) rotateX(357deg) rotateY(251deg) rotateZ(425deg) translateZ(-1252px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(42) {
    color: #ab1d7e;
    -webkit-clip-path: polygon(0% 100%, 10% 100%, 10% 150%);
    clip-path: polygon(0% 100%, 10% 100%, 10% 150%);
    -webkit-transform-origin: -26% 143%;
    transform-origin: -26% 143%;
    -webkit-animation: fly42 5000ms 1640ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly42 5000ms 1640ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly42 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-377deg) rotateY(-63deg) rotateZ(-114deg) translateZ(-1521px);
      transform: translate(-50%, -50%) rotateX(-377deg) rotateY(-63deg) rotateZ(-114deg) translateZ(-1521px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-377deg) rotateY(-63deg) rotateZ(-114deg) translateZ(-1521px);
      transform: translate(-50%, -50%) rotateX(-377deg) rotateY(-63deg) rotateZ(-114deg) translateZ(-1521px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly42 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-377deg) rotateY(-63deg) rotateZ(-114deg) translateZ(-1521px);
      transform: translate(-50%, -50%) rotateX(-377deg) rotateY(-63deg) rotateZ(-114deg) translateZ(-1521px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-377deg) rotateY(-63deg) rotateZ(-114deg) translateZ(-1521px);
      transform: translate(-50%, -50%) rotateX(-377deg) rotateY(-63deg) rotateZ(-114deg) translateZ(-1521px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(43) {
    color: #a91d81;
    -webkit-clip-path: polygon(10% 100%, 10% 150%, 20% 150%);
    clip-path: polygon(10% 100%, 10% 150%, 20% 150%);
    -webkit-transform-origin: 13% 129%;
    transform-origin: 13% 129%;
    -webkit-animation: fly43 5000ms 1680ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly43 5000ms 1680ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly43 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(6deg) rotateY(-246deg) rotateZ(245deg) translateZ(-113px);
      transform: translate(-50%, -50%) rotateX(6deg) rotateY(-246deg) rotateZ(245deg) translateZ(-113px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(6deg) rotateY(-246deg) rotateZ(245deg) translateZ(-113px);
      transform: translate(-50%, -50%) rotateX(6deg) rotateY(-246deg) rotateZ(245deg) translateZ(-113px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly43 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(6deg) rotateY(-246deg) rotateZ(245deg) translateZ(-113px);
      transform: translate(-50%, -50%) rotateX(6deg) rotateY(-246deg) rotateZ(245deg) translateZ(-113px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(6deg) rotateY(-246deg) rotateZ(245deg) translateZ(-113px);
      transform: translate(-50%, -50%) rotateX(6deg) rotateY(-246deg) rotateZ(245deg) translateZ(-113px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(44) {
    color: #a71c84;
    -webkit-clip-path: polygon(10% 100%, 20% 100%, 20% 150%);
    clip-path: polygon(10% 100%, 20% 100%, 20% 150%);
    -webkit-transform-origin: 57% 118%;
    transform-origin: 57% 118%;
    -webkit-animation: fly44 5000ms 1720ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly44 5000ms 1720ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly44 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(234deg) rotateY(70deg) rotateZ(428deg) translateZ(430px);
      transform: translate(-50%, -50%) rotateX(234deg) rotateY(70deg) rotateZ(428deg) translateZ(430px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(234deg) rotateY(70deg) rotateZ(428deg) translateZ(430px);
      transform: translate(-50%, -50%) rotateX(234deg) rotateY(70deg) rotateZ(428deg) translateZ(430px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly44 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(234deg) rotateY(70deg) rotateZ(428deg) translateZ(430px);
      transform: translate(-50%, -50%) rotateX(234deg) rotateY(70deg) rotateZ(428deg) translateZ(430px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(234deg) rotateY(70deg) rotateZ(428deg) translateZ(430px);
      transform: translate(-50%, -50%) rotateX(234deg) rotateY(70deg) rotateZ(428deg) translateZ(430px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(45) {
    color: #a51c87;
    -webkit-clip-path: polygon(20% 100%, 20% 150%, 30% 150%);
    clip-path: polygon(20% 100%, 20% 150%, 30% 150%);
    -webkit-transform-origin: 3% 79%;
    transform-origin: 3% 79%;
    -webkit-animation: fly45 5000ms 1760ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly45 5000ms 1760ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly45 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(486deg) rotateY(312deg) rotateZ(218deg) translateZ(-892px);
      transform: translate(-50%, -50%) rotateX(486deg) rotateY(312deg) rotateZ(218deg) translateZ(-892px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(486deg) rotateY(312deg) rotateZ(218deg) translateZ(-892px);
      transform: translate(-50%, -50%) rotateX(486deg) rotateY(312deg) rotateZ(218deg) translateZ(-892px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly45 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(486deg) rotateY(312deg) rotateZ(218deg) translateZ(-892px);
      transform: translate(-50%, -50%) rotateX(486deg) rotateY(312deg) rotateZ(218deg) translateZ(-892px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(486deg) rotateY(312deg) rotateZ(218deg) translateZ(-892px);
      transform: translate(-50%, -50%) rotateX(486deg) rotateY(312deg) rotateZ(218deg) translateZ(-892px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(46) {
    color: #a31b8a;
    -webkit-clip-path: polygon(20% 100%, 30% 100%, 30% 150%);
    clip-path: polygon(20% 100%, 30% 100%, 30% 150%);
    -webkit-transform-origin: -18% 53%;
    transform-origin: -18% 53%;
    -webkit-animation: fly46 5000ms 1800ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly46 5000ms 1800ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly46 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-447deg) rotateY(-205deg) rotateZ(183deg) translateZ(-642px);
      transform: translate(-50%, -50%) rotateX(-447deg) rotateY(-205deg) rotateZ(183deg) translateZ(-642px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-447deg) rotateY(-205deg) rotateZ(183deg) translateZ(-642px);
      transform: translate(-50%, -50%) rotateX(-447deg) rotateY(-205deg) rotateZ(183deg) translateZ(-642px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly46 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-447deg) rotateY(-205deg) rotateZ(183deg) translateZ(-642px);
      transform: translate(-50%, -50%) rotateX(-447deg) rotateY(-205deg) rotateZ(183deg) translateZ(-642px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-447deg) rotateY(-205deg) rotateZ(183deg) translateZ(-642px);
      transform: translate(-50%, -50%) rotateX(-447deg) rotateY(-205deg) rotateZ(183deg) translateZ(-642px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(47) {
    color: #a11b8d;
    -webkit-clip-path: polygon(30% 100%, 30% 150%, 40% 150%);
    clip-path: polygon(30% 100%, 30% 150%, 40% 150%);
    -webkit-transform-origin: 10% 100%;
    transform-origin: 10% 100%;
    -webkit-animation: fly47 5000ms 1840ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly47 5000ms 1840ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly47 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-363deg) rotateY(447deg) rotateZ(-247deg) translateZ(387px);
      transform: translate(-50%, -50%) rotateX(-363deg) rotateY(447deg) rotateZ(-247deg) translateZ(387px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-363deg) rotateY(447deg) rotateZ(-247deg) translateZ(387px);
      transform: translate(-50%, -50%) rotateX(-363deg) rotateY(447deg) rotateZ(-247deg) translateZ(387px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly47 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-363deg) rotateY(447deg) rotateZ(-247deg) translateZ(387px);
      transform: translate(-50%, -50%) rotateX(-363deg) rotateY(447deg) rotateZ(-247deg) translateZ(387px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-363deg) rotateY(447deg) rotateZ(-247deg) translateZ(387px);
      transform: translate(-50%, -50%) rotateX(-363deg) rotateY(447deg) rotateZ(-247deg) translateZ(387px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(48) {
    color: #9f1a90;
    -webkit-clip-path: polygon(30% 100%, 40% 100%, 40% 150%);
    clip-path: polygon(30% 100%, 40% 100%, 40% 150%);
    -webkit-transform-origin: 75% 80%;
    transform-origin: 75% 80%;
    -webkit-animation: fly48 5000ms 1880ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly48 5000ms 1880ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly48 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-235deg) rotateY(-281deg) rotateZ(-415deg) translateZ(-894px);
      transform: translate(-50%, -50%) rotateX(-235deg) rotateY(-281deg) rotateZ(-415deg) translateZ(-894px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-235deg) rotateY(-281deg) rotateZ(-415deg) translateZ(-894px);
      transform: translate(-50%, -50%) rotateX(-235deg) rotateY(-281deg) rotateZ(-415deg) translateZ(-894px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly48 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-235deg) rotateY(-281deg) rotateZ(-415deg) translateZ(-894px);
      transform: translate(-50%, -50%) rotateX(-235deg) rotateY(-281deg) rotateZ(-415deg) translateZ(-894px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-235deg) rotateY(-281deg) rotateZ(-415deg) translateZ(-894px);
      transform: translate(-50%, -50%) rotateX(-235deg) rotateY(-281deg) rotateZ(-415deg) translateZ(-894px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(49) {
    color: #9d1a93;
    -webkit-clip-path: polygon(40% 100%, 40% 150%, 50% 150%);
    clip-path: polygon(40% 100%, 40% 150%, 50% 150%);
    -webkit-transform-origin: 78% 53%;
    transform-origin: 78% 53%;
    -webkit-animation: fly49 5000ms 1920ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly49 5000ms 1920ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly49 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-222deg) rotateY(198deg) rotateZ(480deg) translateZ(-1435px);
      transform: translate(-50%, -50%) rotateX(-222deg) rotateY(198deg) rotateZ(480deg) translateZ(-1435px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-222deg) rotateY(198deg) rotateZ(480deg) translateZ(-1435px);
      transform: translate(-50%, -50%) rotateX(-222deg) rotateY(198deg) rotateZ(480deg) translateZ(-1435px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly49 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-222deg) rotateY(198deg) rotateZ(480deg) translateZ(-1435px);
      transform: translate(-50%, -50%) rotateX(-222deg) rotateY(198deg) rotateZ(480deg) translateZ(-1435px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-222deg) rotateY(198deg) rotateZ(480deg) translateZ(-1435px);
      transform: translate(-50%, -50%) rotateX(-222deg) rotateY(198deg) rotateZ(480deg) translateZ(-1435px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(50) {
    color: #9b1996;
    -webkit-clip-path: polygon(40% 100%, 50% 100%, 50% 150%);
    clip-path: polygon(40% 100%, 50% 100%, 50% 150%);
    -webkit-transform-origin: 78% 93%;
    transform-origin: 78% 93%;
    -webkit-animation: fly50 5000ms 1960ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly50 5000ms 1960ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly50 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(167deg) rotateY(-163deg) rotateZ(-222deg) translateZ(-57px);
      transform: translate(-50%, -50%) rotateX(167deg) rotateY(-163deg) rotateZ(-222deg) translateZ(-57px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(167deg) rotateY(-163deg) rotateZ(-222deg) translateZ(-57px);
      transform: translate(-50%, -50%) rotateX(167deg) rotateY(-163deg) rotateZ(-222deg) translateZ(-57px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly50 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(167deg) rotateY(-163deg) rotateZ(-222deg) translateZ(-57px);
      transform: translate(-50%, -50%) rotateX(167deg) rotateY(-163deg) rotateZ(-222deg) translateZ(-57px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(167deg) rotateY(-163deg) rotateZ(-222deg) translateZ(-57px);
      transform: translate(-50%, -50%) rotateX(167deg) rotateY(-163deg) rotateZ(-222deg) translateZ(-57px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(51) {
    color: #991999;
    -webkit-clip-path: polygon(50% 100%, 50% 150%, 60% 150%);
    clip-path: polygon(50% 100%, 50% 150%, 60% 150%);
    -webkit-transform-origin: 71% 146%;
    transform-origin: 71% 146%;
    -webkit-animation: fly51 5000ms 2000ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly51 5000ms 2000ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly51 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-62deg) rotateY(-52deg) rotateZ(-75deg) translateZ(-2490px);
      transform: translate(-50%, -50%) rotateX(-62deg) rotateY(-52deg) rotateZ(-75deg) translateZ(-2490px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-62deg) rotateY(-52deg) rotateZ(-75deg) translateZ(-2490px);
      transform: translate(-50%, -50%) rotateX(-62deg) rotateY(-52deg) rotateZ(-75deg) translateZ(-2490px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly51 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-62deg) rotateY(-52deg) rotateZ(-75deg) translateZ(-2490px);
      transform: translate(-50%, -50%) rotateX(-62deg) rotateY(-52deg) rotateZ(-75deg) translateZ(-2490px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-62deg) rotateY(-52deg) rotateZ(-75deg) translateZ(-2490px);
      transform: translate(-50%, -50%) rotateX(-62deg) rotateY(-52deg) rotateZ(-75deg) translateZ(-2490px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(52) {
    color: #97189c;
    -webkit-clip-path: polygon(50% 100%, 60% 100%, 60% 150%);
    clip-path: polygon(50% 100%, 60% 100%, 60% 150%);
    -webkit-transform-origin: 54% 72%;
    transform-origin: 54% 72%;
    -webkit-animation: fly52 5000ms 2040ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly52 5000ms 2040ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly52 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-167deg) rotateY(127deg) rotateZ(-194deg) translateZ(-505px);
      transform: translate(-50%, -50%) rotateX(-167deg) rotateY(127deg) rotateZ(-194deg) translateZ(-505px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-167deg) rotateY(127deg) rotateZ(-194deg) translateZ(-505px);
      transform: translate(-50%, -50%) rotateX(-167deg) rotateY(127deg) rotateZ(-194deg) translateZ(-505px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly52 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-167deg) rotateY(127deg) rotateZ(-194deg) translateZ(-505px);
      transform: translate(-50%, -50%) rotateX(-167deg) rotateY(127deg) rotateZ(-194deg) translateZ(-505px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-167deg) rotateY(127deg) rotateZ(-194deg) translateZ(-505px);
      transform: translate(-50%, -50%) rotateX(-167deg) rotateY(127deg) rotateZ(-194deg) translateZ(-505px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(53) {
    color: #95189f;
    -webkit-clip-path: polygon(60% 100%, 60% 150%, 70% 150%);
    clip-path: polygon(60% 100%, 60% 150%, 70% 150%);
    -webkit-transform-origin: 37% 53%;
    transform-origin: 37% 53%;
    -webkit-animation: fly53 5000ms 2080ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly53 5000ms 2080ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly53 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(117deg) rotateY(-386deg) rotateZ(113deg) translateZ(-1990px);
      transform: translate(-50%, -50%) rotateX(117deg) rotateY(-386deg) rotateZ(113deg) translateZ(-1990px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(117deg) rotateY(-386deg) rotateZ(113deg) translateZ(-1990px);
      transform: translate(-50%, -50%) rotateX(117deg) rotateY(-386deg) rotateZ(113deg) translateZ(-1990px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly53 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(117deg) rotateY(-386deg) rotateZ(113deg) translateZ(-1990px);
      transform: translate(-50%, -50%) rotateX(117deg) rotateY(-386deg) rotateZ(113deg) translateZ(-1990px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(117deg) rotateY(-386deg) rotateZ(113deg) translateZ(-1990px);
      transform: translate(-50%, -50%) rotateX(117deg) rotateY(-386deg) rotateZ(113deg) translateZ(-1990px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(54) {
    color: #9317a2;
    -webkit-clip-path: polygon(60% 100%, 70% 100%, 70% 150%);
    clip-path: polygon(60% 100%, 70% 100%, 70% 150%);
    -webkit-transform-origin: 79% 113%;
    transform-origin: 79% 113%;
    -webkit-animation: fly54 5000ms 2120ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly54 5000ms 2120ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly54 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(39deg) rotateY(482deg) rotateZ(-136deg) translateZ(-25px);
      transform: translate(-50%, -50%) rotateX(39deg) rotateY(482deg) rotateZ(-136deg) translateZ(-25px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(39deg) rotateY(482deg) rotateZ(-136deg) translateZ(-25px);
      transform: translate(-50%, -50%) rotateX(39deg) rotateY(482deg) rotateZ(-136deg) translateZ(-25px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly54 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(39deg) rotateY(482deg) rotateZ(-136deg) translateZ(-25px);
      transform: translate(-50%, -50%) rotateX(39deg) rotateY(482deg) rotateZ(-136deg) translateZ(-25px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(39deg) rotateY(482deg) rotateZ(-136deg) translateZ(-25px);
      transform: translate(-50%, -50%) rotateX(39deg) rotateY(482deg) rotateZ(-136deg) translateZ(-25px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(55) {
    color: #9117a5;
    -webkit-clip-path: polygon(70% 100%, 70% 150%, 80% 150%);
    clip-path: polygon(70% 100%, 70% 150%, 80% 150%);
    -webkit-transform-origin: 88% 144%;
    transform-origin: 88% 144%;
    -webkit-animation: fly55 5000ms 2160ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly55 5000ms 2160ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly55 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(78deg) rotateY(-54deg) rotateZ(341deg) translateZ(-21px);
      transform: translate(-50%, -50%) rotateX(78deg) rotateY(-54deg) rotateZ(341deg) translateZ(-21px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(78deg) rotateY(-54deg) rotateZ(341deg) translateZ(-21px);
      transform: translate(-50%, -50%) rotateX(78deg) rotateY(-54deg) rotateZ(341deg) translateZ(-21px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly55 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(78deg) rotateY(-54deg) rotateZ(341deg) translateZ(-21px);
      transform: translate(-50%, -50%) rotateX(78deg) rotateY(-54deg) rotateZ(341deg) translateZ(-21px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(78deg) rotateY(-54deg) rotateZ(341deg) translateZ(-21px);
      transform: translate(-50%, -50%) rotateX(78deg) rotateY(-54deg) rotateZ(341deg) translateZ(-21px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(56) {
    color: #8f16a8;
    -webkit-clip-path: polygon(70% 100%, 80% 100%, 80% 150%);
    clip-path: polygon(70% 100%, 80% 100%, 80% 150%);
    -webkit-transform-origin: 119% 84%;
    transform-origin: 119% 84%;
    -webkit-animation: fly56 5000ms 2200ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly56 5000ms 2200ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly56 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-140deg) rotateY(64deg) rotateZ(7deg) translateZ(479px);
      transform: translate(-50%, -50%) rotateX(-140deg) rotateY(64deg) rotateZ(7deg) translateZ(479px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-140deg) rotateY(64deg) rotateZ(7deg) translateZ(479px);
      transform: translate(-50%, -50%) rotateX(-140deg) rotateY(64deg) rotateZ(7deg) translateZ(479px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly56 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-140deg) rotateY(64deg) rotateZ(7deg) translateZ(479px);
      transform: translate(-50%, -50%) rotateX(-140deg) rotateY(64deg) rotateZ(7deg) translateZ(479px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-140deg) rotateY(64deg) rotateZ(7deg) translateZ(479px);
      transform: translate(-50%, -50%) rotateX(-140deg) rotateY(64deg) rotateZ(7deg) translateZ(479px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(57) {
    color: #8d16ab;
    -webkit-clip-path: polygon(80% 100%, 80% 150%, 90% 150%);
    clip-path: polygon(80% 100%, 80% 150%, 90% 150%);
    -webkit-transform-origin: 101% 125%;
    transform-origin: 101% 125%;
    -webkit-animation: fly57 5000ms 2240ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly57 5000ms 2240ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly57 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-69deg) rotateY(-154deg) rotateZ(-498deg) translateZ(-22px);
      transform: translate(-50%, -50%) rotateX(-69deg) rotateY(-154deg) rotateZ(-498deg) translateZ(-22px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-69deg) rotateY(-154deg) rotateZ(-498deg) translateZ(-22px);
      transform: translate(-50%, -50%) rotateX(-69deg) rotateY(-154deg) rotateZ(-498deg) translateZ(-22px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly57 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-69deg) rotateY(-154deg) rotateZ(-498deg) translateZ(-22px);
      transform: translate(-50%, -50%) rotateX(-69deg) rotateY(-154deg) rotateZ(-498deg) translateZ(-22px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-69deg) rotateY(-154deg) rotateZ(-498deg) translateZ(-22px);
      transform: translate(-50%, -50%) rotateX(-69deg) rotateY(-154deg) rotateZ(-498deg) translateZ(-22px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(58) {
    color: #8b15ae;
    -webkit-clip-path: polygon(80% 100%, 90% 100%, 90% 150%);
    clip-path: polygon(80% 100%, 90% 100%, 90% 150%);
    -webkit-transform-origin: 54% 66%;
    transform-origin: 54% 66%;
    -webkit-animation: fly58 5000ms 2280ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly58 5000ms 2280ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly58 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-419deg) rotateY(309deg) rotateZ(-404deg) translateZ(-2017px);
      transform: translate(-50%, -50%) rotateX(-419deg) rotateY(309deg) rotateZ(-404deg) translateZ(-2017px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-419deg) rotateY(309deg) rotateZ(-404deg) translateZ(-2017px);
      transform: translate(-50%, -50%) rotateX(-419deg) rotateY(309deg) rotateZ(-404deg) translateZ(-2017px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly58 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-419deg) rotateY(309deg) rotateZ(-404deg) translateZ(-2017px);
      transform: translate(-50%, -50%) rotateX(-419deg) rotateY(309deg) rotateZ(-404deg) translateZ(-2017px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-419deg) rotateY(309deg) rotateZ(-404deg) translateZ(-2017px);
      transform: translate(-50%, -50%) rotateX(-419deg) rotateY(309deg) rotateZ(-404deg) translateZ(-2017px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(59) {
    color: #8915b1;
    -webkit-clip-path: polygon(90% 100%, 90% 150%, 100% 150%);
    clip-path: polygon(90% 100%, 90% 150%, 100% 150%);
    -webkit-transform-origin: 130% 118%;
    transform-origin: 130% 118%;
    -webkit-animation: fly59 5000ms 2320ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly59 5000ms 2320ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly59 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-181deg) rotateY(-191deg) rotateZ(137deg) translateZ(375px);
      transform: translate(-50%, -50%) rotateX(-181deg) rotateY(-191deg) rotateZ(137deg) translateZ(375px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-181deg) rotateY(-191deg) rotateZ(137deg) translateZ(375px);
      transform: translate(-50%, -50%) rotateX(-181deg) rotateY(-191deg) rotateZ(137deg) translateZ(375px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly59 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-181deg) rotateY(-191deg) rotateZ(137deg) translateZ(375px);
      transform: translate(-50%, -50%) rotateX(-181deg) rotateY(-191deg) rotateZ(137deg) translateZ(375px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-181deg) rotateY(-191deg) rotateZ(137deg) translateZ(375px);
      transform: translate(-50%, -50%) rotateX(-181deg) rotateY(-191deg) rotateZ(137deg) translateZ(375px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(60) {
    color: #8714b4;
    -webkit-clip-path: polygon(90% 100%, 100% 100%, 100% 150%);
    clip-path: polygon(90% 100%, 100% 100%, 100% 150%);
    -webkit-transform-origin: 77% 57%;
    transform-origin: 77% 57%;
    -webkit-animation: fly60 5000ms 2360ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly60 5000ms 2360ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly60 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(384deg) rotateY(413deg) rotateZ(-204deg) translateZ(-1592px);
      transform: translate(-50%, -50%) rotateX(384deg) rotateY(413deg) rotateZ(-204deg) translateZ(-1592px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(384deg) rotateY(413deg) rotateZ(-204deg) translateZ(-1592px);
      transform: translate(-50%, -50%) rotateX(384deg) rotateY(413deg) rotateZ(-204deg) translateZ(-1592px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly60 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(384deg) rotateY(413deg) rotateZ(-204deg) translateZ(-1592px);
      transform: translate(-50%, -50%) rotateX(384deg) rotateY(413deg) rotateZ(-204deg) translateZ(-1592px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(384deg) rotateY(413deg) rotateZ(-204deg) translateZ(-1592px);
      transform: translate(-50%, -50%) rotateX(384deg) rotateY(413deg) rotateZ(-204deg) translateZ(-1592px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(61) {
    color: #8514b7;
    -webkit-clip-path: polygon(0% 150%, 0% 200%, 10% 200%);
    clip-path: polygon(0% 150%, 0% 200%, 10% 200%);
    -webkit-transform-origin: -1% 173%;
    transform-origin: -1% 173%;
    -webkit-animation: fly61 5000ms 2400ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly61 5000ms 2400ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly61 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-401deg) rotateY(-282deg) rotateZ(335deg) translateZ(-900px);
      transform: translate(-50%, -50%) rotateX(-401deg) rotateY(-282deg) rotateZ(335deg) translateZ(-900px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-401deg) rotateY(-282deg) rotateZ(335deg) translateZ(-900px);
      transform: translate(-50%, -50%) rotateX(-401deg) rotateY(-282deg) rotateZ(335deg) translateZ(-900px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly61 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-401deg) rotateY(-282deg) rotateZ(335deg) translateZ(-900px);
      transform: translate(-50%, -50%) rotateX(-401deg) rotateY(-282deg) rotateZ(335deg) translateZ(-900px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-401deg) rotateY(-282deg) rotateZ(335deg) translateZ(-900px);
      transform: translate(-50%, -50%) rotateX(-401deg) rotateY(-282deg) rotateZ(335deg) translateZ(-900px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(62) {
    color: #8313ba;
    -webkit-clip-path: polygon(0% 150%, 10% 150%, 10% 200%);
    clip-path: polygon(0% 150%, 10% 150%, 10% 200%);
    -webkit-transform-origin: 49% 192%;
    transform-origin: 49% 192%;
    -webkit-animation: fly62 5000ms 2440ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly62 5000ms 2440ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly62 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-162deg) rotateY(235deg) rotateZ(118deg) translateZ(-2446px);
      transform: translate(-50%, -50%) rotateX(-162deg) rotateY(235deg) rotateZ(118deg) translateZ(-2446px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-162deg) rotateY(235deg) rotateZ(118deg) translateZ(-2446px);
      transform: translate(-50%, -50%) rotateX(-162deg) rotateY(235deg) rotateZ(118deg) translateZ(-2446px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly62 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-162deg) rotateY(235deg) rotateZ(118deg) translateZ(-2446px);
      transform: translate(-50%, -50%) rotateX(-162deg) rotateY(235deg) rotateZ(118deg) translateZ(-2446px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-162deg) rotateY(235deg) rotateZ(118deg) translateZ(-2446px);
      transform: translate(-50%, -50%) rotateX(-162deg) rotateY(235deg) rotateZ(118deg) translateZ(-2446px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(63) {
    color: #8113bd;
    -webkit-clip-path: polygon(10% 150%, 10% 200%, 20% 200%);
    clip-path: polygon(10% 150%, 10% 200%, 20% 200%);
    -webkit-transform-origin: -4% 196%;
    transform-origin: -4% 196%;
    -webkit-animation: fly63 5000ms 2480ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly63 5000ms 2480ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly63 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(144deg) rotateY(-469deg) rotateZ(296deg) translateZ(-43px);
      transform: translate(-50%, -50%) rotateX(144deg) rotateY(-469deg) rotateZ(296deg) translateZ(-43px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(144deg) rotateY(-469deg) rotateZ(296deg) translateZ(-43px);
      transform: translate(-50%, -50%) rotateX(144deg) rotateY(-469deg) rotateZ(296deg) translateZ(-43px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly63 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(144deg) rotateY(-469deg) rotateZ(296deg) translateZ(-43px);
      transform: translate(-50%, -50%) rotateX(144deg) rotateY(-469deg) rotateZ(296deg) translateZ(-43px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(144deg) rotateY(-469deg) rotateZ(296deg) translateZ(-43px);
      transform: translate(-50%, -50%) rotateX(144deg) rotateY(-469deg) rotateZ(296deg) translateZ(-43px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(64) {
    color: #7f12c0;
    -webkit-clip-path: polygon(10% 150%, 20% 150%, 20% 200%);
    clip-path: polygon(10% 150%, 20% 150%, 20% 200%);
    -webkit-transform-origin: 38% 138%;
    transform-origin: 38% 138%;
    -webkit-animation: fly64 5000ms 2520ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly64 5000ms 2520ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly64 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-342deg) rotateY(-199deg) rotateZ(-458deg) translateZ(-1503px);
      transform: translate(-50%, -50%) rotateX(-342deg) rotateY(-199deg) rotateZ(-458deg) translateZ(-1503px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-342deg) rotateY(-199deg) rotateZ(-458deg) translateZ(-1503px);
      transform: translate(-50%, -50%) rotateX(-342deg) rotateY(-199deg) rotateZ(-458deg) translateZ(-1503px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly64 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-342deg) rotateY(-199deg) rotateZ(-458deg) translateZ(-1503px);
      transform: translate(-50%, -50%) rotateX(-342deg) rotateY(-199deg) rotateZ(-458deg) translateZ(-1503px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-342deg) rotateY(-199deg) rotateZ(-458deg) translateZ(-1503px);
      transform: translate(-50%, -50%) rotateX(-342deg) rotateY(-199deg) rotateZ(-458deg) translateZ(-1503px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(65) {
    color: #7d12c3;
    -webkit-clip-path: polygon(20% 150%, 20% 200%, 30% 200%);
    clip-path: polygon(20% 150%, 20% 200%, 30% 200%);
    -webkit-transform-origin: 63% 126%;
    transform-origin: 63% 126%;
    -webkit-animation: fly65 5000ms 2560ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly65 5000ms 2560ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly65 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-53deg) rotateY(-421deg) rotateZ(-465deg) translateZ(-411px);
      transform: translate(-50%, -50%) rotateX(-53deg) rotateY(-421deg) rotateZ(-465deg) translateZ(-411px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-53deg) rotateY(-421deg) rotateZ(-465deg) translateZ(-411px);
      transform: translate(-50%, -50%) rotateX(-53deg) rotateY(-421deg) rotateZ(-465deg) translateZ(-411px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly65 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-53deg) rotateY(-421deg) rotateZ(-465deg) translateZ(-411px);
      transform: translate(-50%, -50%) rotateX(-53deg) rotateY(-421deg) rotateZ(-465deg) translateZ(-411px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-53deg) rotateY(-421deg) rotateZ(-465deg) translateZ(-411px);
      transform: translate(-50%, -50%) rotateX(-53deg) rotateY(-421deg) rotateZ(-465deg) translateZ(-411px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(66) {
    color: #7b11c6;
    -webkit-clip-path: polygon(20% 150%, 30% 150%, 30% 200%);
    clip-path: polygon(20% 150%, 30% 150%, 30% 200%);
    -webkit-transform-origin: 10% 104%;
    transform-origin: 10% 104%;
    -webkit-animation: fly66 5000ms 2600ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly66 5000ms 2600ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly66 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-337deg) rotateY(-443deg) rotateZ(-390deg) translateZ(-1102px);
      transform: translate(-50%, -50%) rotateX(-337deg) rotateY(-443deg) rotateZ(-390deg) translateZ(-1102px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-337deg) rotateY(-443deg) rotateZ(-390deg) translateZ(-1102px);
      transform: translate(-50%, -50%) rotateX(-337deg) rotateY(-443deg) rotateZ(-390deg) translateZ(-1102px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly66 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-337deg) rotateY(-443deg) rotateZ(-390deg) translateZ(-1102px);
      transform: translate(-50%, -50%) rotateX(-337deg) rotateY(-443deg) rotateZ(-390deg) translateZ(-1102px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-337deg) rotateY(-443deg) rotateZ(-390deg) translateZ(-1102px);
      transform: translate(-50%, -50%) rotateX(-337deg) rotateY(-443deg) rotateZ(-390deg) translateZ(-1102px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(67) {
    color: #7911c9;
    -webkit-clip-path: polygon(30% 150%, 30% 200%, 40% 200%);
    clip-path: polygon(30% 150%, 30% 200%, 40% 200%);
    -webkit-transform-origin: 53% 174%;
    transform-origin: 53% 174%;
    -webkit-animation: fly67 5000ms 2640ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly67 5000ms 2640ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly67 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(361deg) rotateY(131deg) rotateZ(144deg) translateZ(-1986px);
      transform: translate(-50%, -50%) rotateX(361deg) rotateY(131deg) rotateZ(144deg) translateZ(-1986px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(361deg) rotateY(131deg) rotateZ(144deg) translateZ(-1986px);
      transform: translate(-50%, -50%) rotateX(361deg) rotateY(131deg) rotateZ(144deg) translateZ(-1986px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly67 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(361deg) rotateY(131deg) rotateZ(144deg) translateZ(-1986px);
      transform: translate(-50%, -50%) rotateX(361deg) rotateY(131deg) rotateZ(144deg) translateZ(-1986px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(361deg) rotateY(131deg) rotateZ(144deg) translateZ(-1986px);
      transform: translate(-50%, -50%) rotateX(361deg) rotateY(131deg) rotateZ(144deg) translateZ(-1986px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(68) {
    color: #7710cc;
    -webkit-clip-path: polygon(30% 150%, 40% 150%, 40% 200%);
    clip-path: polygon(30% 150%, 40% 150%, 40% 200%);
    -webkit-transform-origin: 62% 131%;
    transform-origin: 62% 131%;
    -webkit-animation: fly68 5000ms 2680ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly68 5000ms 2680ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly68 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-9deg) rotateY(-438deg) rotateZ(-283deg) translateZ(-202px);
      transform: translate(-50%, -50%) rotateX(-9deg) rotateY(-438deg) rotateZ(-283deg) translateZ(-202px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-9deg) rotateY(-438deg) rotateZ(-283deg) translateZ(-202px);
      transform: translate(-50%, -50%) rotateX(-9deg) rotateY(-438deg) rotateZ(-283deg) translateZ(-202px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly68 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-9deg) rotateY(-438deg) rotateZ(-283deg) translateZ(-202px);
      transform: translate(-50%, -50%) rotateX(-9deg) rotateY(-438deg) rotateZ(-283deg) translateZ(-202px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-9deg) rotateY(-438deg) rotateZ(-283deg) translateZ(-202px);
      transform: translate(-50%, -50%) rotateX(-9deg) rotateY(-438deg) rotateZ(-283deg) translateZ(-202px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(69) {
    color: #7510cf;
    -webkit-clip-path: polygon(40% 150%, 40% 200%, 50% 200%);
    clip-path: polygon(40% 150%, 40% 200%, 50% 200%);
    -webkit-transform-origin: 13% 181%;
    transform-origin: 13% 181%;
    -webkit-animation: fly69 5000ms 2720ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly69 5000ms 2720ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly69 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-196deg) rotateY(-174deg) rotateZ(-313deg) translateZ(-2421px);
      transform: translate(-50%, -50%) rotateX(-196deg) rotateY(-174deg) rotateZ(-313deg) translateZ(-2421px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-196deg) rotateY(-174deg) rotateZ(-313deg) translateZ(-2421px);
      transform: translate(-50%, -50%) rotateX(-196deg) rotateY(-174deg) rotateZ(-313deg) translateZ(-2421px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly69 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-196deg) rotateY(-174deg) rotateZ(-313deg) translateZ(-2421px);
      transform: translate(-50%, -50%) rotateX(-196deg) rotateY(-174deg) rotateZ(-313deg) translateZ(-2421px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-196deg) rotateY(-174deg) rotateZ(-313deg) translateZ(-2421px);
      transform: translate(-50%, -50%) rotateX(-196deg) rotateY(-174deg) rotateZ(-313deg) translateZ(-2421px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(70) {
    color: #730fd2;
    -webkit-clip-path: polygon(40% 150%, 50% 150%, 50% 200%);
    clip-path: polygon(40% 150%, 50% 150%, 50% 200%);
    -webkit-transform-origin: 71% 101%;
    transform-origin: 71% 101%;
    -webkit-animation: fly70 5000ms 2760ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly70 5000ms 2760ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly70 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-30deg) rotateY(29deg) rotateZ(355deg) translateZ(-1505px);
      transform: translate(-50%, -50%) rotateX(-30deg) rotateY(29deg) rotateZ(355deg) translateZ(-1505px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-30deg) rotateY(29deg) rotateZ(355deg) translateZ(-1505px);
      transform: translate(-50%, -50%) rotateX(-30deg) rotateY(29deg) rotateZ(355deg) translateZ(-1505px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly70 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-30deg) rotateY(29deg) rotateZ(355deg) translateZ(-1505px);
      transform: translate(-50%, -50%) rotateX(-30deg) rotateY(29deg) rotateZ(355deg) translateZ(-1505px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-30deg) rotateY(29deg) rotateZ(355deg) translateZ(-1505px);
      transform: translate(-50%, -50%) rotateX(-30deg) rotateY(29deg) rotateZ(355deg) translateZ(-1505px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(71) {
    color: #710fd5;
    -webkit-clip-path: polygon(50% 150%, 50% 200%, 60% 200%);
    clip-path: polygon(50% 150%, 50% 200%, 60% 200%);
    -webkit-transform-origin: 47% 107%;
    transform-origin: 47% 107%;
    -webkit-animation: fly71 5000ms 2800ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly71 5000ms 2800ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly71 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(219deg) rotateY(60deg) rotateZ(-62deg) translateZ(-150px);
      transform: translate(-50%, -50%) rotateX(219deg) rotateY(60deg) rotateZ(-62deg) translateZ(-150px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(219deg) rotateY(60deg) rotateZ(-62deg) translateZ(-150px);
      transform: translate(-50%, -50%) rotateX(219deg) rotateY(60deg) rotateZ(-62deg) translateZ(-150px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly71 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(219deg) rotateY(60deg) rotateZ(-62deg) translateZ(-150px);
      transform: translate(-50%, -50%) rotateX(219deg) rotateY(60deg) rotateZ(-62deg) translateZ(-150px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(219deg) rotateY(60deg) rotateZ(-62deg) translateZ(-150px);
      transform: translate(-50%, -50%) rotateX(219deg) rotateY(60deg) rotateZ(-62deg) translateZ(-150px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(72) {
    color: #6f0ed8;
    -webkit-clip-path: polygon(50% 150%, 60% 150%, 60% 200%);
    clip-path: polygon(50% 150%, 60% 150%, 60% 200%);
    -webkit-transform-origin: 42% 175%;
    transform-origin: 42% 175%;
    -webkit-animation: fly72 5000ms 2840ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly72 5000ms 2840ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly72 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-220deg) rotateY(-457deg) rotateZ(195deg) translateZ(-1580px);
      transform: translate(-50%, -50%) rotateX(-220deg) rotateY(-457deg) rotateZ(195deg) translateZ(-1580px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-220deg) rotateY(-457deg) rotateZ(195deg) translateZ(-1580px);
      transform: translate(-50%, -50%) rotateX(-220deg) rotateY(-457deg) rotateZ(195deg) translateZ(-1580px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly72 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-220deg) rotateY(-457deg) rotateZ(195deg) translateZ(-1580px);
      transform: translate(-50%, -50%) rotateX(-220deg) rotateY(-457deg) rotateZ(195deg) translateZ(-1580px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-220deg) rotateY(-457deg) rotateZ(195deg) translateZ(-1580px);
      transform: translate(-50%, -50%) rotateX(-220deg) rotateY(-457deg) rotateZ(195deg) translateZ(-1580px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(73) {
    color: #6d0edb;
    -webkit-clip-path: polygon(60% 150%, 60% 200%, 70% 200%);
    clip-path: polygon(60% 150%, 60% 200%, 70% 200%);
    -webkit-transform-origin: 109% 132%;
    transform-origin: 109% 132%;
    -webkit-animation: fly73 5000ms 2880ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly73 5000ms 2880ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly73 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(38deg) rotateY(-319deg) rotateZ(-52deg) translateZ(43px);
      transform: translate(-50%, -50%) rotateX(38deg) rotateY(-319deg) rotateZ(-52deg) translateZ(43px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(38deg) rotateY(-319deg) rotateZ(-52deg) translateZ(43px);
      transform: translate(-50%, -50%) rotateX(38deg) rotateY(-319deg) rotateZ(-52deg) translateZ(43px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly73 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(38deg) rotateY(-319deg) rotateZ(-52deg) translateZ(43px);
      transform: translate(-50%, -50%) rotateX(38deg) rotateY(-319deg) rotateZ(-52deg) translateZ(43px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(38deg) rotateY(-319deg) rotateZ(-52deg) translateZ(43px);
      transform: translate(-50%, -50%) rotateX(38deg) rotateY(-319deg) rotateZ(-52deg) translateZ(43px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(74) {
    color: #6b0dde;
    -webkit-clip-path: polygon(60% 150%, 70% 150%, 70% 200%);
    clip-path: polygon(60% 150%, 70% 150%, 70% 200%);
    -webkit-transform-origin: 93% 173%;
    transform-origin: 93% 173%;
    -webkit-animation: fly74 5000ms 2920ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly74 5000ms 2920ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly74 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-167deg) rotateY(-498deg) rotateZ(-72deg) translateZ(-1025px);
      transform: translate(-50%, -50%) rotateX(-167deg) rotateY(-498deg) rotateZ(-72deg) translateZ(-1025px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-167deg) rotateY(-498deg) rotateZ(-72deg) translateZ(-1025px);
      transform: translate(-50%, -50%) rotateX(-167deg) rotateY(-498deg) rotateZ(-72deg) translateZ(-1025px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly74 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-167deg) rotateY(-498deg) rotateZ(-72deg) translateZ(-1025px);
      transform: translate(-50%, -50%) rotateX(-167deg) rotateY(-498deg) rotateZ(-72deg) translateZ(-1025px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-167deg) rotateY(-498deg) rotateZ(-72deg) translateZ(-1025px);
      transform: translate(-50%, -50%) rotateX(-167deg) rotateY(-498deg) rotateZ(-72deg) translateZ(-1025px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(75) {
    color: #690de1;
    -webkit-clip-path: polygon(70% 150%, 70% 200%, 80% 200%);
    clip-path: polygon(70% 150%, 70% 200%, 80% 200%);
    -webkit-transform-origin: 46% 154%;
    transform-origin: 46% 154%;
    -webkit-animation: fly75 5000ms 2960ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly75 5000ms 2960ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly75 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(220deg) rotateY(193deg) rotateZ(63deg) translateZ(-2157px);
      transform: translate(-50%, -50%) rotateX(220deg) rotateY(193deg) rotateZ(63deg) translateZ(-2157px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(220deg) rotateY(193deg) rotateZ(63deg) translateZ(-2157px);
      transform: translate(-50%, -50%) rotateX(220deg) rotateY(193deg) rotateZ(63deg) translateZ(-2157px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly75 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(220deg) rotateY(193deg) rotateZ(63deg) translateZ(-2157px);
      transform: translate(-50%, -50%) rotateX(220deg) rotateY(193deg) rotateZ(63deg) translateZ(-2157px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(220deg) rotateY(193deg) rotateZ(63deg) translateZ(-2157px);
      transform: translate(-50%, -50%) rotateX(220deg) rotateY(193deg) rotateZ(63deg) translateZ(-2157px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(76) {
    color: #670ce4;
    -webkit-clip-path: polygon(70% 150%, 80% 150%, 80% 200%);
    clip-path: polygon(70% 150%, 80% 150%, 80% 200%);
    -webkit-transform-origin: 55% 125%;
    transform-origin: 55% 125%;
    -webkit-animation: fly76 5000ms 3000ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly76 5000ms 3000ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly76 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-262deg) rotateY(310deg) rotateZ(108deg) translateZ(-2360px);
      transform: translate(-50%, -50%) rotateX(-262deg) rotateY(310deg) rotateZ(108deg) translateZ(-2360px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-262deg) rotateY(310deg) rotateZ(108deg) translateZ(-2360px);
      transform: translate(-50%, -50%) rotateX(-262deg) rotateY(310deg) rotateZ(108deg) translateZ(-2360px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly76 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-262deg) rotateY(310deg) rotateZ(108deg) translateZ(-2360px);
      transform: translate(-50%, -50%) rotateX(-262deg) rotateY(310deg) rotateZ(108deg) translateZ(-2360px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-262deg) rotateY(310deg) rotateZ(108deg) translateZ(-2360px);
      transform: translate(-50%, -50%) rotateX(-262deg) rotateY(310deg) rotateZ(108deg) translateZ(-2360px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(77) {
    color: #650ce7;
    -webkit-clip-path: polygon(80% 150%, 80% 200%, 90% 200%);
    clip-path: polygon(80% 150%, 80% 200%, 90% 200%);
    -webkit-transform-origin: 89% 144%;
    transform-origin: 89% 144%;
    -webkit-animation: fly77 5000ms 3040ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly77 5000ms 3040ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly77 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(368deg) rotateY(-211deg) rotateZ(-2deg) translateZ(-1056px);
      transform: translate(-50%, -50%) rotateX(368deg) rotateY(-211deg) rotateZ(-2deg) translateZ(-1056px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(368deg) rotateY(-211deg) rotateZ(-2deg) translateZ(-1056px);
      transform: translate(-50%, -50%) rotateX(368deg) rotateY(-211deg) rotateZ(-2deg) translateZ(-1056px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly77 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(368deg) rotateY(-211deg) rotateZ(-2deg) translateZ(-1056px);
      transform: translate(-50%, -50%) rotateX(368deg) rotateY(-211deg) rotateZ(-2deg) translateZ(-1056px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(368deg) rotateY(-211deg) rotateZ(-2deg) translateZ(-1056px);
      transform: translate(-50%, -50%) rotateX(368deg) rotateY(-211deg) rotateZ(-2deg) translateZ(-1056px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(78) {
    color: #630bea;
    -webkit-clip-path: polygon(80% 150%, 90% 150%, 90% 200%);
    clip-path: polygon(80% 150%, 90% 150%, 90% 200%);
    -webkit-transform-origin: 81% 197%;
    transform-origin: 81% 197%;
    -webkit-animation: fly78 5000ms 3080ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly78 5000ms 3080ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly78 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(419deg) rotateY(60deg) rotateZ(-218deg) translateZ(-1969px);
      transform: translate(-50%, -50%) rotateX(419deg) rotateY(60deg) rotateZ(-218deg) translateZ(-1969px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(419deg) rotateY(60deg) rotateZ(-218deg) translateZ(-1969px);
      transform: translate(-50%, -50%) rotateX(419deg) rotateY(60deg) rotateZ(-218deg) translateZ(-1969px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly78 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(419deg) rotateY(60deg) rotateZ(-218deg) translateZ(-1969px);
      transform: translate(-50%, -50%) rotateX(419deg) rotateY(60deg) rotateZ(-218deg) translateZ(-1969px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(419deg) rotateY(60deg) rotateZ(-218deg) translateZ(-1969px);
      transform: translate(-50%, -50%) rotateX(419deg) rotateY(60deg) rotateZ(-218deg) translateZ(-1969px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(79) {
    color: #610bed;
    -webkit-clip-path: polygon(90% 150%, 90% 200%, 100% 200%);
    clip-path: polygon(90% 150%, 90% 200%, 100% 200%);
    -webkit-transform-origin: 63% 165%;
    transform-origin: 63% 165%;
    -webkit-animation: fly79 5000ms 3120ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly79 5000ms 3120ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly79 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(213deg) rotateY(306deg) rotateZ(-381deg) translateZ(135px);
      transform: translate(-50%, -50%) rotateX(213deg) rotateY(306deg) rotateZ(-381deg) translateZ(135px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(213deg) rotateY(306deg) rotateZ(-381deg) translateZ(135px);
      transform: translate(-50%, -50%) rotateX(213deg) rotateY(306deg) rotateZ(-381deg) translateZ(135px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly79 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(213deg) rotateY(306deg) rotateZ(-381deg) translateZ(135px);
      transform: translate(-50%, -50%) rotateX(213deg) rotateY(306deg) rotateZ(-381deg) translateZ(135px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(213deg) rotateY(306deg) rotateZ(-381deg) translateZ(135px);
      transform: translate(-50%, -50%) rotateX(213deg) rotateY(306deg) rotateZ(-381deg) translateZ(135px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(80) {
    color: #5f0af0;
    -webkit-clip-path: polygon(90% 150%, 100% 150%, 100% 200%);
    clip-path: polygon(90% 150%, 100% 150%, 100% 200%);
    -webkit-transform-origin: 137% 157%;
    transform-origin: 137% 157%;
    -webkit-animation: fly80 5000ms 3160ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly80 5000ms 3160ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly80 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(456deg) rotateY(342deg) rotateZ(-43deg) translateZ(149px);
      transform: translate(-50%, -50%) rotateX(456deg) rotateY(342deg) rotateZ(-43deg) translateZ(149px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(456deg) rotateY(342deg) rotateZ(-43deg) translateZ(149px);
      transform: translate(-50%, -50%) rotateX(456deg) rotateY(342deg) rotateZ(-43deg) translateZ(149px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly80 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(456deg) rotateY(342deg) rotateZ(-43deg) translateZ(149px);
      transform: translate(-50%, -50%) rotateX(456deg) rotateY(342deg) rotateZ(-43deg) translateZ(149px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(456deg) rotateY(342deg) rotateZ(-43deg) translateZ(149px);
      transform: translate(-50%, -50%) rotateX(456deg) rotateY(342deg) rotateZ(-43deg) translateZ(149px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(81) {
    color: #5d0af3;
    -webkit-clip-path: polygon(0% 200%, 0% 250%, 10% 250%);
    clip-path: polygon(0% 200%, 0% 250%, 10% 250%);
    -webkit-transform-origin: 41% 180%;
    transform-origin: 41% 180%;
    -webkit-animation: fly81 5000ms 3200ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly81 5000ms 3200ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly81 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(212deg) rotateY(192deg) rotateZ(-236deg) translateZ(484px);
      transform: translate(-50%, -50%) rotateX(212deg) rotateY(192deg) rotateZ(-236deg) translateZ(484px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(212deg) rotateY(192deg) rotateZ(-236deg) translateZ(484px);
      transform: translate(-50%, -50%) rotateX(212deg) rotateY(192deg) rotateZ(-236deg) translateZ(484px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly81 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(212deg) rotateY(192deg) rotateZ(-236deg) translateZ(484px);
      transform: translate(-50%, -50%) rotateX(212deg) rotateY(192deg) rotateZ(-236deg) translateZ(484px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(212deg) rotateY(192deg) rotateZ(-236deg) translateZ(484px);
      transform: translate(-50%, -50%) rotateX(212deg) rotateY(192deg) rotateZ(-236deg) translateZ(484px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(82) {
    color: #5b09f6;
    -webkit-clip-path: polygon(0% 200%, 10% 200%, 10% 250%);
    clip-path: polygon(0% 200%, 10% 200%, 10% 250%);
    -webkit-transform-origin: -24% 221%;
    transform-origin: -24% 221%;
    -webkit-animation: fly82 5000ms 3240ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly82 5000ms 3240ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly82 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(260deg) rotateY(119deg) rotateZ(403deg) translateZ(277px);
      transform: translate(-50%, -50%) rotateX(260deg) rotateY(119deg) rotateZ(403deg) translateZ(277px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(260deg) rotateY(119deg) rotateZ(403deg) translateZ(277px);
      transform: translate(-50%, -50%) rotateX(260deg) rotateY(119deg) rotateZ(403deg) translateZ(277px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly82 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(260deg) rotateY(119deg) rotateZ(403deg) translateZ(277px);
      transform: translate(-50%, -50%) rotateX(260deg) rotateY(119deg) rotateZ(403deg) translateZ(277px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(260deg) rotateY(119deg) rotateZ(403deg) translateZ(277px);
      transform: translate(-50%, -50%) rotateX(260deg) rotateY(119deg) rotateZ(403deg) translateZ(277px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(83) {
    color: #5909f9;
    -webkit-clip-path: polygon(10% 200%, 10% 250%, 20% 250%);
    clip-path: polygon(10% 200%, 10% 250%, 20% 250%);
    -webkit-transform-origin: -33% 160%;
    transform-origin: -33% 160%;
    -webkit-animation: fly83 5000ms 3280ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly83 5000ms 3280ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly83 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-213deg) rotateY(397deg) rotateZ(-80deg) translateZ(-156px);
      transform: translate(-50%, -50%) rotateX(-213deg) rotateY(397deg) rotateZ(-80deg) translateZ(-156px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-213deg) rotateY(397deg) rotateZ(-80deg) translateZ(-156px);
      transform: translate(-50%, -50%) rotateX(-213deg) rotateY(397deg) rotateZ(-80deg) translateZ(-156px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly83 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-213deg) rotateY(397deg) rotateZ(-80deg) translateZ(-156px);
      transform: translate(-50%, -50%) rotateX(-213deg) rotateY(397deg) rotateZ(-80deg) translateZ(-156px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-213deg) rotateY(397deg) rotateZ(-80deg) translateZ(-156px);
      transform: translate(-50%, -50%) rotateX(-213deg) rotateY(397deg) rotateZ(-80deg) translateZ(-156px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(84) {
    color: #5708fc;
    -webkit-clip-path: polygon(10% 200%, 20% 200%, 20% 250%);
    clip-path: polygon(10% 200%, 20% 200%, 20% 250%);
    -webkit-transform-origin: -26% 225%;
    transform-origin: -26% 225%;
    -webkit-animation: fly84 5000ms 3320ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly84 5000ms 3320ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly84 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-145deg) rotateY(272deg) rotateZ(-391deg) translateZ(-6px);
      transform: translate(-50%, -50%) rotateX(-145deg) rotateY(272deg) rotateZ(-391deg) translateZ(-6px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-145deg) rotateY(272deg) rotateZ(-391deg) translateZ(-6px);
      transform: translate(-50%, -50%) rotateX(-145deg) rotateY(272deg) rotateZ(-391deg) translateZ(-6px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly84 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-145deg) rotateY(272deg) rotateZ(-391deg) translateZ(-6px);
      transform: translate(-50%, -50%) rotateX(-145deg) rotateY(272deg) rotateZ(-391deg) translateZ(-6px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-145deg) rotateY(272deg) rotateZ(-391deg) translateZ(-6px);
      transform: translate(-50%, -50%) rotateX(-145deg) rotateY(272deg) rotateZ(-391deg) translateZ(-6px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(85) {
    color: #5508ff;
    -webkit-clip-path: polygon(20% 200%, 20% 250%, 30% 250%);
    clip-path: polygon(20% 200%, 20% 250%, 30% 250%);
    -webkit-transform-origin: -14% 164%;
    transform-origin: -14% 164%;
    -webkit-animation: fly85 5000ms 3360ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly85 5000ms 3360ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly85 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(49deg) rotateY(442deg) rotateZ(-24deg) translateZ(-454px);
      transform: translate(-50%, -50%) rotateX(49deg) rotateY(442deg) rotateZ(-24deg) translateZ(-454px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(49deg) rotateY(442deg) rotateZ(-24deg) translateZ(-454px);
      transform: translate(-50%, -50%) rotateX(49deg) rotateY(442deg) rotateZ(-24deg) translateZ(-454px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly85 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(49deg) rotateY(442deg) rotateZ(-24deg) translateZ(-454px);
      transform: translate(-50%, -50%) rotateX(49deg) rotateY(442deg) rotateZ(-24deg) translateZ(-454px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(49deg) rotateY(442deg) rotateZ(-24deg) translateZ(-454px);
      transform: translate(-50%, -50%) rotateX(49deg) rotateY(442deg) rotateZ(-24deg) translateZ(-454px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(86) {
    color: #5307ff;
    -webkit-clip-path: polygon(20% 200%, 30% 200%, 30% 250%);
    clip-path: polygon(20% 200%, 30% 200%, 30% 250%);
    -webkit-transform-origin: -3% 216%;
    transform-origin: -3% 216%;
    -webkit-animation: fly86 5000ms 3400ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly86 5000ms 3400ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly86 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-324deg) rotateY(-186deg) rotateZ(57deg) translateZ(-818px);
      transform: translate(-50%, -50%) rotateX(-324deg) rotateY(-186deg) rotateZ(57deg) translateZ(-818px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-324deg) rotateY(-186deg) rotateZ(57deg) translateZ(-818px);
      transform: translate(-50%, -50%) rotateX(-324deg) rotateY(-186deg) rotateZ(57deg) translateZ(-818px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly86 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-324deg) rotateY(-186deg) rotateZ(57deg) translateZ(-818px);
      transform: translate(-50%, -50%) rotateX(-324deg) rotateY(-186deg) rotateZ(57deg) translateZ(-818px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-324deg) rotateY(-186deg) rotateZ(57deg) translateZ(-818px);
      transform: translate(-50%, -50%) rotateX(-324deg) rotateY(-186deg) rotateZ(57deg) translateZ(-818px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(87) {
    color: #5107ff;
    -webkit-clip-path: polygon(30% 200%, 30% 250%, 40% 250%);
    clip-path: polygon(30% 200%, 30% 250%, 40% 250%);
    -webkit-transform-origin: 76% 154%;
    transform-origin: 76% 154%;
    -webkit-animation: fly87 5000ms 3440ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly87 5000ms 3440ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly87 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(108deg) rotateY(-119deg) rotateZ(-45deg) translateZ(-298px);
      transform: translate(-50%, -50%) rotateX(108deg) rotateY(-119deg) rotateZ(-45deg) translateZ(-298px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(108deg) rotateY(-119deg) rotateZ(-45deg) translateZ(-298px);
      transform: translate(-50%, -50%) rotateX(108deg) rotateY(-119deg) rotateZ(-45deg) translateZ(-298px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly87 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(108deg) rotateY(-119deg) rotateZ(-45deg) translateZ(-298px);
      transform: translate(-50%, -50%) rotateX(108deg) rotateY(-119deg) rotateZ(-45deg) translateZ(-298px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(108deg) rotateY(-119deg) rotateZ(-45deg) translateZ(-298px);
      transform: translate(-50%, -50%) rotateX(108deg) rotateY(-119deg) rotateZ(-45deg) translateZ(-298px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(88) {
    color: #4f06ff;
    -webkit-clip-path: polygon(30% 200%, 40% 200%, 40% 250%);
    clip-path: polygon(30% 200%, 40% 200%, 40% 250%);
    -webkit-transform-origin: -17% 234%;
    transform-origin: -17% 234%;
    -webkit-animation: fly88 5000ms 3480ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly88 5000ms 3480ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly88 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-205deg) rotateY(-309deg) rotateZ(29deg) translateZ(-1305px);
      transform: translate(-50%, -50%) rotateX(-205deg) rotateY(-309deg) rotateZ(29deg) translateZ(-1305px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-205deg) rotateY(-309deg) rotateZ(29deg) translateZ(-1305px);
      transform: translate(-50%, -50%) rotateX(-205deg) rotateY(-309deg) rotateZ(29deg) translateZ(-1305px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly88 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-205deg) rotateY(-309deg) rotateZ(29deg) translateZ(-1305px);
      transform: translate(-50%, -50%) rotateX(-205deg) rotateY(-309deg) rotateZ(29deg) translateZ(-1305px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-205deg) rotateY(-309deg) rotateZ(29deg) translateZ(-1305px);
      transform: translate(-50%, -50%) rotateX(-205deg) rotateY(-309deg) rotateZ(29deg) translateZ(-1305px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(89) {
    color: #4d06ff;
    -webkit-clip-path: polygon(40% 200%, 40% 250%, 50% 250%);
    clip-path: polygon(40% 200%, 40% 250%, 50% 250%);
    -webkit-transform-origin: 79% 181%;
    transform-origin: 79% 181%;
    -webkit-animation: fly89 5000ms 3520ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly89 5000ms 3520ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly89 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(16deg) rotateY(-295deg) rotateZ(391deg) translateZ(-2058px);
      transform: translate(-50%, -50%) rotateX(16deg) rotateY(-295deg) rotateZ(391deg) translateZ(-2058px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(16deg) rotateY(-295deg) rotateZ(391deg) translateZ(-2058px);
      transform: translate(-50%, -50%) rotateX(16deg) rotateY(-295deg) rotateZ(391deg) translateZ(-2058px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly89 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(16deg) rotateY(-295deg) rotateZ(391deg) translateZ(-2058px);
      transform: translate(-50%, -50%) rotateX(16deg) rotateY(-295deg) rotateZ(391deg) translateZ(-2058px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(16deg) rotateY(-295deg) rotateZ(391deg) translateZ(-2058px);
      transform: translate(-50%, -50%) rotateX(16deg) rotateY(-295deg) rotateZ(391deg) translateZ(-2058px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(90) {
    color: #4b05ff;
    -webkit-clip-path: polygon(40% 200%, 50% 200%, 50% 250%);
    clip-path: polygon(40% 200%, 50% 200%, 50% 250%);
    -webkit-transform-origin: 18% 185%;
    transform-origin: 18% 185%;
    -webkit-animation: fly90 5000ms 3560ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly90 5000ms 3560ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly90 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(206deg) rotateY(81deg) rotateZ(-179deg) translateZ(233px);
      transform: translate(-50%, -50%) rotateX(206deg) rotateY(81deg) rotateZ(-179deg) translateZ(233px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(206deg) rotateY(81deg) rotateZ(-179deg) translateZ(233px);
      transform: translate(-50%, -50%) rotateX(206deg) rotateY(81deg) rotateZ(-179deg) translateZ(233px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly90 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(206deg) rotateY(81deg) rotateZ(-179deg) translateZ(233px);
      transform: translate(-50%, -50%) rotateX(206deg) rotateY(81deg) rotateZ(-179deg) translateZ(233px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(206deg) rotateY(81deg) rotateZ(-179deg) translateZ(233px);
      transform: translate(-50%, -50%) rotateX(206deg) rotateY(81deg) rotateZ(-179deg) translateZ(233px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(91) {
    color: #4905ff;
    -webkit-clip-path: polygon(50% 200%, 50% 250%, 60% 250%);
    clip-path: polygon(50% 200%, 50% 250%, 60% 250%);
    -webkit-transform-origin: 32% 202%;
    transform-origin: 32% 202%;
    -webkit-animation: fly91 5000ms 3600ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly91 5000ms 3600ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly91 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(249deg) rotateY(-214deg) rotateZ(-24deg) translateZ(-2266px);
      transform: translate(-50%, -50%) rotateX(249deg) rotateY(-214deg) rotateZ(-24deg) translateZ(-2266px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(249deg) rotateY(-214deg) rotateZ(-24deg) translateZ(-2266px);
      transform: translate(-50%, -50%) rotateX(249deg) rotateY(-214deg) rotateZ(-24deg) translateZ(-2266px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly91 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(249deg) rotateY(-214deg) rotateZ(-24deg) translateZ(-2266px);
      transform: translate(-50%, -50%) rotateX(249deg) rotateY(-214deg) rotateZ(-24deg) translateZ(-2266px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(249deg) rotateY(-214deg) rotateZ(-24deg) translateZ(-2266px);
      transform: translate(-50%, -50%) rotateX(249deg) rotateY(-214deg) rotateZ(-24deg) translateZ(-2266px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(92) {
    color: #4704ff;
    -webkit-clip-path: polygon(50% 200%, 60% 200%, 60% 250%);
    clip-path: polygon(50% 200%, 60% 200%, 60% 250%);
    -webkit-transform-origin: 81% 154%;
    transform-origin: 81% 154%;
    -webkit-animation: fly92 5000ms 3640ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly92 5000ms 3640ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly92 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(155deg) rotateY(410deg) rotateZ(174deg) translateZ(-1891px);
      transform: translate(-50%, -50%) rotateX(155deg) rotateY(410deg) rotateZ(174deg) translateZ(-1891px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(155deg) rotateY(410deg) rotateZ(174deg) translateZ(-1891px);
      transform: translate(-50%, -50%) rotateX(155deg) rotateY(410deg) rotateZ(174deg) translateZ(-1891px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly92 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(155deg) rotateY(410deg) rotateZ(174deg) translateZ(-1891px);
      transform: translate(-50%, -50%) rotateX(155deg) rotateY(410deg) rotateZ(174deg) translateZ(-1891px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(155deg) rotateY(410deg) rotateZ(174deg) translateZ(-1891px);
      transform: translate(-50%, -50%) rotateX(155deg) rotateY(410deg) rotateZ(174deg) translateZ(-1891px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(93) {
    color: #4504ff;
    -webkit-clip-path: polygon(60% 200%, 60% 250%, 70% 250%);
    clip-path: polygon(60% 200%, 60% 250%, 70% 250%);
    -webkit-transform-origin: 86% 195%;
    transform-origin: 86% 195%;
    -webkit-animation: fly93 5000ms 3680ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly93 5000ms 3680ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly93 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(215deg) rotateY(294deg) rotateZ(83deg) translateZ(477px);
      transform: translate(-50%, -50%) rotateX(215deg) rotateY(294deg) rotateZ(83deg) translateZ(477px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(215deg) rotateY(294deg) rotateZ(83deg) translateZ(477px);
      transform: translate(-50%, -50%) rotateX(215deg) rotateY(294deg) rotateZ(83deg) translateZ(477px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly93 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(215deg) rotateY(294deg) rotateZ(83deg) translateZ(477px);
      transform: translate(-50%, -50%) rotateX(215deg) rotateY(294deg) rotateZ(83deg) translateZ(477px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(215deg) rotateY(294deg) rotateZ(83deg) translateZ(477px);
      transform: translate(-50%, -50%) rotateX(215deg) rotateY(294deg) rotateZ(83deg) translateZ(477px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(94) {
    color: #4303ff;
    -webkit-clip-path: polygon(60% 200%, 70% 200%, 70% 250%);
    clip-path: polygon(60% 200%, 70% 200%, 70% 250%);
    -webkit-transform-origin: 31% 237%;
    transform-origin: 31% 237%;
    -webkit-animation: fly94 5000ms 3720ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly94 5000ms 3720ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly94 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(358deg) rotateY(-435deg) rotateZ(245deg) translateZ(-2335px);
      transform: translate(-50%, -50%) rotateX(358deg) rotateY(-435deg) rotateZ(245deg) translateZ(-2335px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(358deg) rotateY(-435deg) rotateZ(245deg) translateZ(-2335px);
      transform: translate(-50%, -50%) rotateX(358deg) rotateY(-435deg) rotateZ(245deg) translateZ(-2335px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly94 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(358deg) rotateY(-435deg) rotateZ(245deg) translateZ(-2335px);
      transform: translate(-50%, -50%) rotateX(358deg) rotateY(-435deg) rotateZ(245deg) translateZ(-2335px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(358deg) rotateY(-435deg) rotateZ(245deg) translateZ(-2335px);
      transform: translate(-50%, -50%) rotateX(358deg) rotateY(-435deg) rotateZ(245deg) translateZ(-2335px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(95) {
    color: #4103ff;
    -webkit-clip-path: polygon(70% 200%, 70% 250%, 80% 250%);
    clip-path: polygon(70% 200%, 70% 250%, 80% 250%);
    -webkit-transform-origin: 41% 233%;
    transform-origin: 41% 233%;
    -webkit-animation: fly95 5000ms 3760ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly95 5000ms 3760ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly95 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(267deg) rotateY(155deg) rotateZ(208deg) translateZ(-1379px);
      transform: translate(-50%, -50%) rotateX(267deg) rotateY(155deg) rotateZ(208deg) translateZ(-1379px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(267deg) rotateY(155deg) rotateZ(208deg) translateZ(-1379px);
      transform: translate(-50%, -50%) rotateX(267deg) rotateY(155deg) rotateZ(208deg) translateZ(-1379px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly95 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(267deg) rotateY(155deg) rotateZ(208deg) translateZ(-1379px);
      transform: translate(-50%, -50%) rotateX(267deg) rotateY(155deg) rotateZ(208deg) translateZ(-1379px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(267deg) rotateY(155deg) rotateZ(208deg) translateZ(-1379px);
      transform: translate(-50%, -50%) rotateX(267deg) rotateY(155deg) rotateZ(208deg) translateZ(-1379px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(96) {
    color: #3f02ff;
    -webkit-clip-path: polygon(70% 200%, 80% 200%, 80% 250%);
    clip-path: polygon(70% 200%, 80% 200%, 80% 250%);
    -webkit-transform-origin: 104% 221%;
    transform-origin: 104% 221%;
    -webkit-animation: fly96 5000ms 3800ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly96 5000ms 3800ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly96 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-350deg) rotateY(112deg) rotateZ(-17deg) translateZ(-2132px);
      transform: translate(-50%, -50%) rotateX(-350deg) rotateY(112deg) rotateZ(-17deg) translateZ(-2132px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-350deg) rotateY(112deg) rotateZ(-17deg) translateZ(-2132px);
      transform: translate(-50%, -50%) rotateX(-350deg) rotateY(112deg) rotateZ(-17deg) translateZ(-2132px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly96 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-350deg) rotateY(112deg) rotateZ(-17deg) translateZ(-2132px);
      transform: translate(-50%, -50%) rotateX(-350deg) rotateY(112deg) rotateZ(-17deg) translateZ(-2132px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-350deg) rotateY(112deg) rotateZ(-17deg) translateZ(-2132px);
      transform: translate(-50%, -50%) rotateX(-350deg) rotateY(112deg) rotateZ(-17deg) translateZ(-2132px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(97) {
    color: #3d02ff;
    -webkit-clip-path: polygon(80% 200%, 80% 250%, 90% 250%);
    clip-path: polygon(80% 200%, 80% 250%, 90% 250%);
    -webkit-transform-origin: 122% 157%;
    transform-origin: 122% 157%;
    -webkit-animation: fly97 5000ms 3840ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly97 5000ms 3840ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly97 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(140deg) rotateY(-317deg) rotateZ(-196deg) translateZ(-299px);
      transform: translate(-50%, -50%) rotateX(140deg) rotateY(-317deg) rotateZ(-196deg) translateZ(-299px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(140deg) rotateY(-317deg) rotateZ(-196deg) translateZ(-299px);
      transform: translate(-50%, -50%) rotateX(140deg) rotateY(-317deg) rotateZ(-196deg) translateZ(-299px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly97 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(140deg) rotateY(-317deg) rotateZ(-196deg) translateZ(-299px);
      transform: translate(-50%, -50%) rotateX(140deg) rotateY(-317deg) rotateZ(-196deg) translateZ(-299px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(140deg) rotateY(-317deg) rotateZ(-196deg) translateZ(-299px);
      transform: translate(-50%, -50%) rotateX(140deg) rotateY(-317deg) rotateZ(-196deg) translateZ(-299px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(98) {
    color: #3b01ff;
    -webkit-clip-path: polygon(80% 200%, 90% 200%, 90% 250%);
    clip-path: polygon(80% 200%, 90% 200%, 90% 250%);
    -webkit-transform-origin: 44% 179%;
    transform-origin: 44% 179%;
    -webkit-animation: fly98 5000ms 3880ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly98 5000ms 3880ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly98 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-184deg) rotateY(-95deg) rotateZ(468deg) translateZ(-1176px);
      transform: translate(-50%, -50%) rotateX(-184deg) rotateY(-95deg) rotateZ(468deg) translateZ(-1176px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-184deg) rotateY(-95deg) rotateZ(468deg) translateZ(-1176px);
      transform: translate(-50%, -50%) rotateX(-184deg) rotateY(-95deg) rotateZ(468deg) translateZ(-1176px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly98 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-184deg) rotateY(-95deg) rotateZ(468deg) translateZ(-1176px);
      transform: translate(-50%, -50%) rotateX(-184deg) rotateY(-95deg) rotateZ(468deg) translateZ(-1176px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-184deg) rotateY(-95deg) rotateZ(468deg) translateZ(-1176px);
      transform: translate(-50%, -50%) rotateX(-184deg) rotateY(-95deg) rotateZ(468deg) translateZ(-1176px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(99) {
    color: #3901ff;
    -webkit-clip-path: polygon(90% 200%, 90% 250%, 100% 250%);
    clip-path: polygon(90% 200%, 90% 250%, 100% 250%);
    -webkit-transform-origin: 43% 194%;
    transform-origin: 43% 194%;
    -webkit-animation: fly99 5000ms 3920ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly99 5000ms 3920ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly99 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(497deg) rotateY(72deg) rotateZ(362deg) translateZ(-2380px);
      transform: translate(-50%, -50%) rotateX(497deg) rotateY(72deg) rotateZ(362deg) translateZ(-2380px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(497deg) rotateY(72deg) rotateZ(362deg) translateZ(-2380px);
      transform: translate(-50%, -50%) rotateX(497deg) rotateY(72deg) rotateZ(362deg) translateZ(-2380px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly99 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(497deg) rotateY(72deg) rotateZ(362deg) translateZ(-2380px);
      transform: translate(-50%, -50%) rotateX(497deg) rotateY(72deg) rotateZ(362deg) translateZ(-2380px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(497deg) rotateY(72deg) rotateZ(362deg) translateZ(-2380px);
      transform: translate(-50%, -50%) rotateX(497deg) rotateY(72deg) rotateZ(362deg) translateZ(-2380px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(100) {
    color: #3700ff;
    -webkit-clip-path: polygon(90% 200%, 100% 200%, 100% 250%);
    clip-path: polygon(90% 200%, 100% 200%, 100% 250%);
    -webkit-transform-origin: 124% 248%;
    transform-origin: 124% 248%;
    -webkit-animation: fly100 5000ms 3960ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly100 5000ms 3960ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly100 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(450deg) rotateY(-130deg) rotateZ(-315deg) translateZ(-1500px);
      transform: translate(-50%, -50%) rotateX(450deg) rotateY(-130deg) rotateZ(-315deg) translateZ(-1500px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(450deg) rotateY(-130deg) rotateZ(-315deg) translateZ(-1500px);
      transform: translate(-50%, -50%) rotateX(450deg) rotateY(-130deg) rotateZ(-315deg) translateZ(-1500px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly100 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(450deg) rotateY(-130deg) rotateZ(-315deg) translateZ(-1500px);
      transform: translate(-50%, -50%) rotateX(450deg) rotateY(-130deg) rotateZ(-315deg) translateZ(-1500px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(450deg) rotateY(-130deg) rotateZ(-315deg) translateZ(-1500px);
      transform: translate(-50%, -50%) rotateX(450deg) rotateY(-130deg) rotateZ(-315deg) translateZ(-1500px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  #ui .text:nth-child(101) {
    color: #3500ff;
    -webkit-clip-path: polygon(0% 250%, 0% 300%, 10% 300%);
    clip-path: polygon(0% 250%, 0% 300%, 10% 300%);
    -webkit-transform-origin: 43% 273%;
    transform-origin: 43% 273%;
    -webkit-animation: fly101 5000ms 4000ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
    animation: fly101 5000ms 4000ms cubic-bezier(0.36, 0.1, 0.16, 1) infinite alternate;
  }
  @-webkit-keyframes fly101 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-243deg) rotateY(-320deg) rotateZ(95deg) translateZ(464px);
      transform: translate(-50%, -50%) rotateX(-243deg) rotateY(-320deg) rotateZ(95deg) translateZ(464px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-243deg) rotateY(-320deg) rotateZ(95deg) translateZ(464px);
      transform: translate(-50%, -50%) rotateX(-243deg) rotateY(-320deg) rotateZ(95deg) translateZ(464px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }
  @keyframes fly101 {
    0% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-243deg) rotateY(-320deg) rotateZ(95deg) translateZ(464px);
      transform: translate(-50%, -50%) rotateX(-243deg) rotateY(-320deg) rotateZ(95deg) translateZ(464px);
    }
    10% {
      opacity: 0;
      -webkit-transform: translate(-50%, -50%) rotateX(-243deg) rotateY(-320deg) rotateZ(95deg) translateZ(464px);
      transform: translate(-50%, -50%) rotateX(-243deg) rotateY(-320deg) rotateZ(95deg) translateZ(464px);
    }
    90% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
      transform: translate(-50%, -50%) rotate(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px);
    }
  }

</style>
