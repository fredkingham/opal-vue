<template>
    <div class="text-left">
        {{ item.date_of_diagnosis }} {{ item.condition }}
    </div>
</template>
<script>

export default {
    name: "DiagnosisDisplay",
    props: ["item"]
}
</script>