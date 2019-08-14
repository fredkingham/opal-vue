<template>
<div class="col-4">
    <div class="card">
    <div class="card-header">
        Demographics
    </div>
    <div class="card-body text-left">
      {{ formInstance.first_name }}
      <DemographicsDisplay></DemographicsDisplay>
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
  data: function(){
      return {
          formInstance: {},
          formComponent: DemographicsForm,

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
