<template>
<div class="col-4">
    <div class="card">
    <div class="card-header">
        Diagnosis
    </div>
    <ul class="list-group list-group-flush">
        <li v-for="item in items" class="list-group-item" v-bind:key="item.id">
        <DiagnosisDisplay :item=item ></DiagnosisDisplay>
        <button class="btn btn-primary" v-on:click="edit(item)">Edit</button>
        </li>
    </ul>
    <div class="card-body">
        <div class="row">
            <div class="col-sm">
                <button class="btn btn-primary" v-on:click="add()">Add</button>
            </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
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
                    return http.save('diagnosis', formInstance).then(function(x){
                        panel.episode.diagnosis.push(x);
                    });
                },
                deleteMethod: function(){
                    var http = new Http();
                    return http.save('', formInstance).then(function(x){
                        panel.episode.diagnosis.push(x);
                    });
                }
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
                        panel.items = panel.items.filter(item => item.id !== formInstance.id);
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
