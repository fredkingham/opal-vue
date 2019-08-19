<template>
<div v-if="patient" class="col-4">
    <div class="card">
    <div class="card-header">
        Demographics
    </div>
    <div class="card-body text-left">
      <DemographicsDisplay :item=item ></DemographicsDisplay>
    </div>
    </div>
    <button v-on:click="show()">Hello world</button>
</div>
</template>

<script>
import DemographicsDisplay from './DemographicsDisplay.vue'
import DemographicsForm from './DemographicsForm.vue'
import SubrecordModal from '../../SubrecordModal.vue'

export default {
  name: 'DemographicsPanel',
  props: ["patient"],
  data: function(){
      return {
          formInstance: {},
          formComponent: DemographicsForm,
          item: this.patient.demographics[0]
      }
  },
  methods: {
    show () {
        this.$modal.show(
            SubrecordModal,
            {
                SubrecordForm: this.formComponent,
                modal_name: "Demographics",
                formInstance: this.formInstance
            },
            {height: "auto"}
        )
    },
    hide () {
        this.$modal.hide();
    }
  },
  components: {
      DemographicsDisplay
  }
}
</script>
