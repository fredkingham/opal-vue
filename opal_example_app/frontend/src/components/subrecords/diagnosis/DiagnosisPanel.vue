<template>
    <div class="card">
    <div class="card-header">
        <h4>Diagnosis
            <button class="float-right btn btn-link" v-on:click="edit(item)">
                <h4>
                <font-awesome-icon icon="plus" />
                </h4>
            </button>
        </h4>
    </div>
    <ul class="list-group list-group-flush">
        <li v-for="item in items" class="list-group-item" v-bind:key="item.id">
          <div class="row">
              <div class="col-md-9">
                <DiagnosisDisplay :item=item ></DiagnosisDisplay>
              </div>
              <div class="col-md-3">
                <button class="float-right btn btn-link" v-on:click="edit(item)">
                    <h4>
                    <font-awesome-icon icon="pencil-alt" />
                    </h4>
                </button>
              </div>
          </div>
        </li>
    </ul>
    </div>
</template>

<script>
import _ from 'lodash'
import DiagnosisDisplay from './DiagnosisDisplay.vue'
import DiagnosisForm from './DiagnosisForm.vue'
import SubrecordModal from '../../SubrecordModal.vue'
import Http from '@/opal/http.js'

export default {
  name: 'DiagnosisPanel',
  props: ["episode"],
  data: function(){
      return {
          formComponent: DiagnosisForm,
          items: this.episode.diagnosis,
          modelName: "diagnosis"
      }
  },
  methods: {
    add () {
        var formInstance = {episode_id: this.episode.id};
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
                        panel.episode.diagnosis.push(x);
                    });
                },
            },
            {
                height: "auto",
            }
        )
    },
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
                        Object.assign(item, x)
                    });
                },
                deleteMethod: function(){
                    var http = new Http();
                    return http.delete(panel.modelName, formInstance.id).then(function(){
                        // mutating lists is hard...
                        // https://vuejs.org/v2/guide/list.html
                        if(panel.items.length === 1){
                            panel.items.pop()
                        }
                        else{
                            panel.items = panel.items.filter(item => item.id !== formInstance.id);
                        }
                    });
                }
            },
            {
                height: "auto",
            }
        )
    },
  },
  components: {
      DiagnosisDisplay
  }
}
</script>
