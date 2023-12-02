<template>
    <div class="default-layout">
        <LeftSideMenu />
        <slot />
    </div>
</template>

<script setup>

</script>

<style scoped>
.default-layout {
    display: flex;
}
</style>