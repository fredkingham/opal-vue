<template>
<div class="col-4">
    <div class="card">
    <div class="card-header">
        Demographics
    </div>
    <div class="card-body text-left">
      <DemographicsDisplay></DemographicsDisplay>
    </div>
    </div>
    <button v-on:click="show()">Hello world</button>
</div>
</template>

<script>
import DemographicsDisplay from './DemographicsDisplay.vue'
import DemographicsModal from './DemographicsModal.vue'

export default {
  name: 'DemographicsPanel',
  methods: {
    show () {
        this.$modal.show(DemographicsModal)
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
