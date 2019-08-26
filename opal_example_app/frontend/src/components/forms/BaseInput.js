/* eslint-disable */
import schema from "@/opal/schema.js"
import _ from 'lodash'

export default{
    props: [
      "lookup_list",
      "title",
      "max_length",
      "default",
      "field_name",
      "value",
      "form_instance"
    ],
    data: function(){
        var form = this;
        var schemaLookup;
        if(this.field_name){
            schemaLookup = schema.fieldLookup(this.field_name);
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
        return result;
    }
}
