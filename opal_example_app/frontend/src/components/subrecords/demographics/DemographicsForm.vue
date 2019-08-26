<template>
   <div>
        <text-input v-model="formInstance.first_name" field_name="demographics.first_name">
        </text-input>
        <date-input v-model="formInstance.date_of_birth" field_name="demographics.date_of_birth">
        </date-input>
    </div>
</template>

<script>
import TextInput from '../../forms/TextInput.vue'
import DateInput from '../../forms/DateInput.vue'

export default {
  name: 'DemographicsForm',
  props: ["formInstance"],
  components: {
      TextInput, DateInput
  }
}
</script>