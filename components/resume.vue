<template>
  <div id="Job History">
    <h1 class="text-3xl">Job History</h1>
    <div v-for="(job, index) in jobs">
      <h1 class="text-2xl">{{ job.title }}</h1>
      <h2 class="text-xl inline">{{ job.company }}</h2>
      <h3 class="inline ">( {{ job.years }} )</h3>
    </div>
    <div id="skills">
      <h1 class="text-3xl">Skills / Experience </h1>
      <ul class="text-left">
        <li v-for="(skill, index) in skills">• {{ skill }}</li>
      </ul>
    </div>
    <div id="Resume Download">
      <a target="_blank" v-bind:href="resumeLink">Download Resume</a>
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
      skills: [
        'Docker',
        'HTML5/CSS/JS',
        'Nuxt/Vue.js',
        'Cisco Networking',
        'Linux Server Management',
        'Windows Troubleshooting',
        'Full Stack Development',
        'C Programming',
        'Python Programming',
        'Perl Programming',
        'C# Programming',
        'Java Programming',
        'Wordpress CMS',
        'SQL Scripting / SQL Server Management',
        'Google Cloud Functions / Google Firebase Hosting'

      ],
    }
  }
}
</script>

<style scoped>

</style>
