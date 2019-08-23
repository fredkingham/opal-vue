<template>
    <div class="card">
    <div class="card-header">
        <h4>
            Demographics
            <button class="float-right btn btn-link" v-on:click="edit(item)">
                <h4>
                <font-awesome-icon icon="pencil-alt" />
                </h4>
            </button>
        </h4>
    </div>
    <div class="card-body text-left">
      <DemographicsDisplay :item=item ></DemographicsDisplay>
    </div>
    <div class="card-body">
        <div class="row">
            <div class="col-sm">
                <button class="btn btn-primary" v-on:click="edit(item)">Edit</button>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import DemographicsDisplay from './DemographicsDisplay.vue'
import DemographicsForm from './DemographicsForm.vue'
import SubrecordModal from '../../SubrecordModal.vue'
import Http from '@/opal/http.js'
import _ from 'lodash'

export default {
  name: 'DemographicsPanel',
  props: ["patient"],
  data: function(){
      return {
          formComponent: DemographicsForm,
          item: this.patient.demographics[0],
          modelName: "demographics"
      }
  },
  methods: {
    edit (item) {
        var formInstance = _.cloneDeep(item);
        var panel = this;
        this.$modal.show(
            SubrecordModal,
            {
                SubrecordForm: this.formComponent,
                modalName: this.modelName,
                formInstance: formInstance,
                saveMethod: function(){
                    var http = new Http();
                    return http.save(panel.modelName, formInstance).then(function(x){
                        Object.assign(panel.patient.demographics[0], x)
                    });
                }
            },
            {
                height: "auto",
            }
        )
    }
  },
  components: {
      DemographicsDisplay
  }
}
</script>
