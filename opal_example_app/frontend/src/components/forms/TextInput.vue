<template>
    <div class="row">
        <div class="col-sm-3">
            <label class="control-label">{{ title_local }}</label>
        </div>
        <div class="col-sm-9">
            <input :list="listId" :value="value" @input="updateInput($event.target.value)" class="form-control" />
            <datalist :id="listId" >
            <option v-for="optionValue in lookup_list_local" v-bind:key="optionValue" v-bind:value="optionValue" />
            </datalist>
        </div>`
    </div>
</template>
<script>
import BaseInput from "./BaseInput.js"
import _ from 'lodash'
export default {
  name: 'TextInput',
  mixins: [BaseInput],
  methods: {
    updateInput(newValue) {
        this.$emit('input', newValue);
    }
  },
  data: function(){
      return {listId: _.uniqueId("listId")}
  }
}
</script>