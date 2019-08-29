<template>
  <div class="row">
      <div class="col-sm-3">
        <label class="control-label">{{ title_local }}</label>
      </div>
      <div class="col-sm-9">
        <input type="date" :value="fieldValue" @blur="updateDate($event.target.value)" class="form-control" />
      </div>
  </div>
</template>
<script>
/* eslint-disable */
var DATE_FORMAT = 'DD/MM/YYYY';

import schema from "@/opal/schema.js"
import DateUtil from "@/opal/date_util.js"
import BaseInput from "./BaseInput.js"

export default {
  name: 'DateInput',
  mixins: [BaseInput],
  data: function(){
      return {
          fieldValue: DateUtil.toMoment(this.value[this.field]).format("YYYY-MM-DD")
      }
  },
  methods: {
    updateDate(newValue){
        var parsed = DateUtil.toString(newValue);
        this.updateInput(parsed);
    }
  }
}
</script>