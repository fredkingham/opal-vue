/* eslint-disable */
import schema from "@/opal/schema.js"
import _ from 'lodash'

export default{
    props: [
      "lookup_list",
      "title",
      "default",
      "value",
      "form_instance",
      "field",
      "subrecord"
    ],
    data: function(){
        var form = this;
        var schemaLookup;
        if(this.subrecord && this.field){
            schemaLookup = schema.fieldLookup(this.subrecord, this.field);
        }
        else{
          schemaLookup = {};
        }
        var result = {};
        _.each(Object.keys(form._props), function(prop){
            if(!_.isUndefined(form[prop])){
                result[prop + "_local"] = form[prop]
            }
            else{
                result[prop + "_local"] = schemaLookup[prop];
            }
        });

        if(!result.lookup_list_local){
          result.lookup_list_local = [];
        }
        return result;
    },
    methods: {
      updateInput(newValue) {
          this.value.data[this.field] = newValue;
          this.$emit('input', this.value);
      }
    }
}
