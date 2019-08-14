<template>
    <ModalBase>
        <template v-slot:header>
            <h5 class="modal-title">Demographics</h5>
        </template>
        <template v-slot:body>
            <component :is="SubrecordForm" v-bind="{ formInstance: formInstance }"></component>
        </template>
    </ModalBase>
</template>

<script>

import ModalBase from './ModalBase.vue'

export default {
  name: 'SubrecordModal',
  props: [
      "SubrecordForm",
      "modal_name",
      "formInstance"
  ],
  components: {
      ModalBase,
  }
}
</script>