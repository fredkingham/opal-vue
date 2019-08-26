<template>
    <div class="container-fluid">
        <text-input field_name="diagnosis.condition" v-model="formInstance.condition" :lookup_list="['cough', 'fever']" display-name="Condition">
        </text-input>
        <date-input field_name="diagnosis.date_of_diagnosis" v-model="formInstance.date_of_diagnosis">
        </date-input>
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