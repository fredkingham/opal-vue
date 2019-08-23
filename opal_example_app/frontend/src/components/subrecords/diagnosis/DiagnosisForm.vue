<template>
    <div class="container-fluid">
        <date-input v-model="formInstance.date_of_diagnosis" display-name="Date of Diagnosis">
        </date-input>
        <text-input v-model="formInstance.condition" :lookup_list="['cough', 'fever']" display-name="Condition">
        </text-input>
    </div>
</template>

<script>
import TextInput from '../../forms/TextInput.vue'
import DateInput from '../../forms/DateInput.vue'

export default {
  name: 'DiagnosisForm',
  props: ["formInstance"],
  components: {
      TextInput, DateInput
  }
}
</script>