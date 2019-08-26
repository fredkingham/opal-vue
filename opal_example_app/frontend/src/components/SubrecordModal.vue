<template>
    <ModalBase>
        <template v-slot:header>
            <h5 class="modal-title">{{ subrecordSchema.displayName }}</h5>
        </template>
        <template v-slot:body>
            <component :is="SubrecordForm" :formInstance=formInstance></component>
        </template>
        <template v-slot:footer>
            <button v-if="deleteMethod" type="button" class="btn btn-danger" @click="deleteInstance()">Delete</button>
            <button type="button" class="btn btn-primary" @click="save()">Save</button>
            <button type="button" class="btn btn-secondary" @click="$emit('close')">Close</button>
        </template>
    </ModalBase>
</template>

<script>

import ModalBase from './ModalBase.vue'
import schema from '@/opal/schema.js'

export default {
  name: 'SubrecordModal',
  props: [
      "SubrecordForm",
      "modelName",
      "formInstance",
      "saveMethod",
      "deleteMethod",
  ],
  components: {
      ModalBase,
  },
  data: function(){
      return {
          subrecordSchema: schema.get(this.modelName)
      }
  },
  methods: {
      save: function(){
          var modal = this;
          this.saveMethod().then(function(){
              modal.$emit('close');
          })
      },
      deleteInstance: function(){
          var modal = this;
          this.deleteMethod().then(function(){
              modal.$emit('close');
          })
      }
  }
}
</script>