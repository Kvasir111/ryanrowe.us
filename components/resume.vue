<template>
  <div id="Job History">
    <h1 class="text-3xl">Job History</h1>
    <div v-for="(job, index) in jobs">
      <h1 class="text-2xl">{{ job.title }}</h1>
      <h2 class="text-xl inline">{{ job.company }}</h2>
      <h3 class="inline ">( {{ job.years }} )</h3>
    </div>
    <div id="skills">
      <h1 class="text-3xl">Skills / Experience</h1>
      <h1>Programming Languages</h1>
      <ul class="text-left">
        <li v-for="(skill, index) in programmingSkills">• {{ skill }}</li>
      </ul>
      <h1>Web Development Skills</h1>
      <ul>
        <li v-for="(skill, index) in webSkills">• {{ skill }}</li>
      </ul>
      <h1>IT Skills</h1>
      <ul>
        <li v-for="(skill, index) in itSkills">• {{ skill }}</li>
      </ul>
    </div>
    <div id="Resume Download">
      <a class="text-2xl" target="_blank" v-bind:href="resumeLink">Download Resume</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "resume",
  data: function () {
    return {
      resumeLink: 'https://drive.google.com/file/d/1b1VvGE34ct7sWAzGvH6HqeB3Sty-aG4m/view?usp=sharing',
      jobs: [
        {company: 'Best Buy', years: '2012-2014', title: 'PC Sales Representative'},
        {company: 'Geek Squad', years: '2014-2016', title: 'Advanced Repair Agent'},
        {
          company: 'Hiawatha Broadband Communications',
          years: '2017-2020',
          title: 'Technical Support Staff / Web Developer'
        },
        {company: 'Geek Squad', years: '2020-2021', title: 'Apple Repair Technician'},
      ],
      programmingSkills: [
        'C Programming',
        'Python Programming',
        'Perl Programming',
        'C# Programming',
        'Java Programming',
      ],
      webSkills: [
        'Google Cloud Functions / Google Firebase Hosting',
        'Wordpress CMS',
        'Docker',
        'HTML5/CSS/JS',
        'Nuxt/Vue.js',
      ],
      itSkills: [
        'Full Stack Development',
        'SQL Scripting / SQL Server Management',
        'Cisco Networking',
        'Linux Server Management',
        'Windows Troubleshooting',
      ],

    }
  }
}
</script>

<style scoped>
h1 {
  color: #838375;
  font-family: "Fake Receipt", sans-serif;
}

h2 {
  color: #838375;
  font-family: "Fake Receipt", sans-serif;
}

h3 {
  color: #838375;
  font-family: "Fake Receipt", sans-serif;
}

li {
  color: #8b8b91;
  font-family: "Liquid Crystal", sans-serif;
}

a {
  color: #f44268;
  font-family: "Liquid Crystal", sans-serif;
}
</style>
