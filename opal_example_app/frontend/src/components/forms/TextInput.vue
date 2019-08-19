<template>
  <b-container fluid>
    <b-row>
    <b-col sm="3">
        <label class="control-label">{{ displayName }}</label>
    </b-col>
    <b-col sm="9">
        <input type="text" :value="value" @input="updateInput($event.target.value)" class="form-control" />
    </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: 'TextInput',
  props: [
      "displayName", "value"
  ],
  methods: {
    updateInput(newValue) {
        this.$emit('input', newValue);
    }
  }
}
</script>