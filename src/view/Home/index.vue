<template>
    <div class="all">
        <header>
            <h1>OfficeSystem</h1>
        </header>
        <ul>
            <li>
                <router-link to="/word">
                    <h2>Word</h2>
                    <img src="../../assets/images/word.avif" alt="">
                </router-link>
            </li>
            <li>
                <router-link to="/excel">
                    <h2>Excel</h2>
                    <img src="../../assets/images/excel.avif" alt="">
                </router-link>
            </li>
            <li>
                <router-link to="/powerpoint">
                    <h2>PowerPoint</h2>
                    <img src="../../assets/images/powerpoint.avif" alt="">
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.all {
    text-align: center;


    header {

        h1 {
            // font-style: italic;
            font-size: 20px;
            line-height: 2;
        }
    }

    ul {
        display: flex;
        justify-content: space-around;

        li {
            width: 20%;
            height: auto;
            aspect-ratio: 1/1;
            background-color: aqua;
            border-radius: 50%;

            a {
                width: 100%;
                height: 100%;
            }
        }
    }

}
</style>