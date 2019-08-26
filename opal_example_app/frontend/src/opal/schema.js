import Http from './http.js'
import _ from 'lodash'

var cache = null;

class Schema{
  load(){
    return Http.get("/api/v0.1/record/").then(function(x){
      cache = x;
    })
  }
  get(key){
    return cache[key];
  }
  fieldLookup(key){
    var splitted = key.split(".")
    var modelSchema = this.get(splitted[0]);
    var fieldSchema = _.find(modelSchema.fields, {name: splitted[1]})
    if(!fieldSchema){
      alert("unable to find " + key);
    }
    return _.cloneDeep(fieldSchema);
  }
}
var schema = new Schema()

export default schema

