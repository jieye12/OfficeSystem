<template>
    <div class="editor">
        <!-- 头部 -->
        <EditorHeader class="layout-header"></EditorHeader>
        <!-- content -->
        <div class="layout-content">
            <!-- left -->
            <Thumbnails class="layout-content-left"></Thumbnails>
            <!-- center -->
            <div class="layout-content-center">
                <!-- top -->
                <CanvasTool class="center-top"></CanvasTool>
                <!-- center -->
                <Canvas></Canvas>
                <!-- bottom -->
                <Remark></Remark>
            </div>
            <!-- right -->
            <Toolbar class="layout-content-right"></Toolbar>
        </div>
    </div>
</template>

<script lang="ts" setup>
import EditorHeader from './EditorHeader/index.vue'
</script>

<style lang="scss" scoped></style>