<template>
    <div>
        <Home v-if="_isPC"></Home>
        <Mobile v-else></Mobile>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
//判断登录设备
import { isPC } from '../../utils/common'
const _isPC = isPC()
// console.log(_isPC);

import Home from '../../view/Home/index.vue'
import Mobile from '../../view/Mobile/index.vue'

onMounted(async () => {

})
</script>

<style lang="scss" scoped></style>