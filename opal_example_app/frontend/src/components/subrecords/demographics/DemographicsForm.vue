<template>
    <div class="row">
        <text-input v-model="formInstance.first_name" display-name="First name">
        </text-input>
    </div>
</template>

<script>
import TextInput from '../../forms/TextInput.vue'

export default {
  name: 'DemographicsForm',
  props: ["formInstance"],
  components: {TextInput}
}
</script>