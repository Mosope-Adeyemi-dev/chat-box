<template>
    <div class="page-container">
        <p>calls</p>
    </div>
</template>

<script setup lang="ts">
    const runtimeConfig = useRuntimeConfig()

    definePageMeta({
        layout: 'default'
    })

</script>

<style scoped>
.page-container {
    margin-left: 100px;
}
</style>