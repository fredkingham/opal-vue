<template>
    <div v-if="patient" class="row">
        <div class="col-sm">
        <DemographicsPanel :patient=patient />
        </div>
        <div class="col-sm">
        <DiagnosisPanel :episode=episode />
        </div>
    </div>
</template>


<script>
import subrecords from '@/components/subrecords'
import Http from '@/opal/http.js'


export default {
  name: 'PatientDetail',
  components: {
    DemographicsPanel: subrecords.demographics.panel,
    DiagnosisPanel: subrecords.diagnosis.panel
  },
  data: function(){
    var patient = null;
    var episode = null;
    return {
        patient: patient,
        episode: episode

    }
  },
  created(){
   var self = this;
   Http.getOne("patient", this.$route.params.id).then(function(x){
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
