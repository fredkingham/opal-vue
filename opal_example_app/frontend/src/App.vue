<template>
  <div id="app">
    <DemographicsPanel msg="Welcome to Your Vue.js App"/>
    <modals-container/>
  </div>
</template>

<script>
import DemographicsPanel from './components/subrecords/demographics/DemographicsPanel.vue'
import http from './opal/http.js'

export default {
  name: 'app',
  components: {
    DemographicsPanel
  },
  data: function(){
      http()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
