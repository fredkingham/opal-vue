<template>
    <div class="row">
        <text-input v-model="formInstance.first_name" display-name="First name">
        </text-input>
        <date-input v-model="formInstance.date_of_birth" display-name="Date of birth">
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