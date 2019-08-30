<template>
    <div class="card">
        <div class="card-header">
            <h4>
                {{ schema.get(modelName).display_name }}
                <button class="float-right btn btn-link" v-on:click="edit(item)">
                    <h4>
                    <font-awesome-icon icon="pencil-alt" />
                    </h4>
                </button>
            </h4>
        </div>
        <div class="card-body text-left">
        <component :is="display" :item="item" />
        </div>
    </div>
</template>

<script>
import subrecords from '@/components/subrecords'
import SubrecordModal from '../../SubrecordModal.vue'
import dateOfBirthValidation from '@/validators/date_of_birth_validation.js'
import Http from '@/opal/http.js'
import schema from '@/opal/schema.js'
import _ from 'lodash'

export default {
  name: 'Panel',
  props: ["patient"],
  data: function(){
      return {
          item: this.patient.demographics[0],
          modelName: "demographics",
          schema: schema,
          display: subrecords.demographics.display
      }
  },
  methods: {
    edit (item) {
        var formData = _.cloneDeep(item);
        var panel = this;
        this.$modal.show(
            SubrecordModal,
            {
                SubrecordForm: subrecords.demographics.form,
                modelName: this.modelName,
                formData: formData,
                validators: [dateOfBirthValidation],
                saveMethod: function(){
                    return Http.save(panel.modelName, formData).then(function(x){
                        Object.assign(panel.patient.demographics[0], x)
                    });
                }
            },
            {
                height: "auto",
            }
        )
    }
  }
}
</script>
