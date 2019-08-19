
<template>
  <div id="app">
    <div v-if="patient">
      <DemographicsPanel :patient=patient />
    </div>
    <modals-container/>
  </div>
</template>

<script>
/* eslint-disable */
import DemographicsPanel from './components/subrecords/demographics/DemographicsPanel.vue'
import Http from './opal/http.js'


export default {
  name: 'app',
  components: {
    DemographicsPanel
  },
  data: function(){
    var patient = null;
    return {
        patient: patient
    }
  },
  created(){
   var self = this;
   var http = new Http("/");
   http.getOne("patient", 1).then(function(x){
    self.patient = x;
    if(self.patient.detail == "Authentication credentials were not provided."){
        alert('logged out');
    }
   });
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
