<template>
    <div>
      <h1>Demographics</h1>
      <DemographicsForm></DemographicsForm>
    </div>
</template>

<script>

import DemographicsForm from './DemographicsForm.vue'
export default {
  name: 'DemographicsModal',
  components: {
      DemographicsForm
  }

}
</script>