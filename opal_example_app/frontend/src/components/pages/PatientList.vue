<template>
  <div class="row">
      <div class="col-md-8 offset-md-2">
        <router-link class="patient-list-card" v-for="object in object_list" :key="object.id" :to="{ name: 'PatientDetail', params: {id: object.id}}">
        <div class="card">
            <div v-for="item in object.demographics" :key="item.id" class="col-sm">
                <h5 class="card-title">{{ item.first_name }} {{ item.surname }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{ item.date_of_birth }}</h6>
            </div>
            <div v-for="item in object.diagnosis" :key="item.id" class="col-sm">
                <DiagnosisDisplay :item=item />
            </div>
        </div>
        </router-link>
    </div>
 </div>
</template>


<script>
import DiagnosisDisplay from '../subrecords/diagnosis/DiagnosisDisplay.vue'
import Http from '@/opal/http.js'
export default {
  name: 'PatientList',
  components: {
    DiagnosisDisplay
  },
  data: function(){
    var patients = null;
    return {
        object_list: patients
    }
  },
  created(){
   var self = this;
   Http.get("/api/v0.1/patientlist/all_patients/").then(function(x){
    self.object_list = x;
   });
  }
}
</script>
