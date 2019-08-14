<template>
    <div>
        <field-display display-name="name" value="jane watson"></field-display>
        <field-display display-name="hosp. #" value="111"></field-display>
        <field-display display-name="nhs #" value="22222"></field-display>
        <field-display display-name="dob" value="12/03/2000 (19)"></field-display>
        <field-display display-name="sex" value="f"></field-display>
    </div>
</template>
<script>
import FieldDisplay from '../../FieldDisplay.vue'
export default {
    name: "DemographicsDisplay",
    components: {
        FieldDisplay
    }
}
</script>