<template>
    <div class="row">
        <text-input v-model="formInstance.first_name" display-name="First name">
        </text-input>
        hello {{ formInstance.first_name }}
    </div>
</template>

<script>
import TextInput from '../../forms/TextInput.vue'

export default {
  name: 'DemographicsForm',
  data: function(){
      return {formInstance: {"first_name": ""}}
  },
  components: {TextInput}
}
</script>