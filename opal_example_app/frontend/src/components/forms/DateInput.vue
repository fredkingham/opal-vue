<template>
  <b-container fluid>
    <b-row>
    <b-col sm="3">
        <label class="control-label">{{ displayName }}</label>
    </b-col>
    <b-col sm="9">
        <input type="date" :value="fieldValue" @blur="updateInput($event.target.value)" class="form-control" />
    </b-col>
    </b-row>
  </b-container>
</template>
<script>
var DATE_FORMAT = 'DD/MM/YYYY';
import moment from 'moment'

export default {
  name: 'DateInput',
  props: [
      "displayName", "value"
  ],
  data: function(){
      return {
          fieldValue: moment(this.value, DATE_FORMAT).format("YYYY-MM-DD")
      }
  },
  methods: {
    updateInput(newValue) {
        newValue = moment(newValue).format(DATE_FORMAT);
        this.$emit('input', newValue);
    }
  }
}
</script>