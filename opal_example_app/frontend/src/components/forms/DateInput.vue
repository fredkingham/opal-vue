<template>
  <div class="row">
      <div class="col-sm-3">
        <label class="control-label">{{ title_local }}</label>
      </div>
      <div class="col-sm-9">
        <input type="date" :value="fieldValue" @blur="updateInput($event.target.value)" class="form-control" />
      </div>
  </div>
</template>
<script>
/* eslint-disable */
var DATE_FORMAT = 'DD/MM/YYYY';
import moment from 'moment'
import schema from "@/opal/schema.js"
import BaseInput from "./BaseInput.js"

export default {
  name: 'DateInput',
  mixins: [BaseInput],
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