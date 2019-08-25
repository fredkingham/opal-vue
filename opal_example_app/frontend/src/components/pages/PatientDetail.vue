<template>
  <div id="app" class="container-fluid">
      <div v-if="patient" class="row">
          <div class="col-sm">
            <DemographicsPanel :patient=patient />
          </div>
          <div class="col-sm">
            <DiagnosisPanel :episode=episode />
          </div>
      </div>
    <modals-container/>
  </div>
</template>


<script>
/* eslint-disable */
import DemographicsPanel from '../subrecords/demographics/DemographicsPanel.vue'
import DiagnosisPanel from '../subrecords/diagnosis/DiagnosisPanel.vue'
import Http from '@/opal/http.js'


export default {
  name: 'PatientDetail',
  components: {
    DemographicsPanel,
    DiagnosisPanel
  },
  data: function(){
    var patient = null;
    var episode = null;
    return {
        patient: patient
    }
  },
  created(){
   var self = this;
   var http = new Http("/");
   http.getOne("patient", 1).then(function(x){
    self.patient = x;
    self.episode = Object.values(x.episodes)[0]
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
