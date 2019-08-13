<template>
  <div class="form-group">
    <label class="control-label col-sm-3">{{ displayName }}</label>
    <input type="text" :value="value" @input="updateInput($event.target.value)" class="form-control" />
  </div>
</template>
<script>
export default {
  name: 'TextInput',
  props: [
      "displayName", "value"
  ],
  methods: {
    updateInput(newValue) {
        this.$emit('input', newValue)
    }
  }
}
</script>