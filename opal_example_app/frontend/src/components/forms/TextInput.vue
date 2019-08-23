<template>
    <div class="row">
        <div class="col-sm-3">
            <label class="control-label">{{ displayName }}</label>
        </div>
        <div class="col-sm-9">
            <input list="browsers" :value="value" @input="updateInput($event.target.value)" class="form-control" />
            <datalist id="browsers" >
            <option v-for="optionValue in lookup_list" v-bind:key="optionValue" v-bind:value="optionValue" />
            </datalist>
        </div>`
    </div>
</template>
<script>
export default {
  name: 'TextInput',
  props: [
      "displayName", "value", "lookup_list"
  ],
  data: function(){
      if(!this.lookup_list){
          return {"lookup_list": []}
      }
      return {};
  },
  methods: {
    updateInput(newValue) {
        this.$emit('input', newValue);
    }
  }
}
</script>