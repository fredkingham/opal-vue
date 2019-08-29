<template>
   <div>
        <text-input v-model="formInstanc" subrecord="demographics" field="first_name">
        </text-input>
        <date-input v-model="formInstance" subrecord="demographics" field="date_of_birth">
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