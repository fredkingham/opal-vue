<template>
    <div class="card">
    <div class="card-header">
        <h4>Diagnosis
            <button class="float-right btn btn-link" v-on:click="add()">
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
import schema from '@/opal/schema.js'

export default {
  name: 'DiagnosisPanel',
  props: ["episode"],
  data: function(){
      return {
          formComponent: DiagnosisForm,
          items: this.episode.diagnosis,
          modelName: "diagnosis",
          schema: schema
      }
  },
  methods: {
    add () {
        var formData = {episode_id: this.episode.id};
        var panel = this;
        this.$modal.show(
            SubrecordModal,
            {
                SubrecordForm: this.formComponent,
                modelName: this.modelName,
                formData: formData,
                saveMethod: function(){
                    return Http.save(panel.modelName, formData).then(function(x){
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
        var formData = _.cloneDeep(item);
        var panel = this;
        this.$modal.show(
            SubrecordModal,
            {
                SubrecordForm: this.formComponent,
                modelName: this.modelName,
                formData: formData,
                saveMethod: function(formData){
                    return Http.save(panel.modelName, formData).then(function(x){
                        Object.assign(item, x)
                    });
                },
                deleteMethod: function(){
                    return Http.delete(panel.modelName, formData.id).then(function(){
                        // mutating lists is hard...
                        // https://vuejs.org/v2/guide/list.html
                        if(panel.items.length === 1){
                            panel.items.pop()
                        }
                        else{
                            panel.items = panel.items.filter(item => item.id !== formData.id);
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
