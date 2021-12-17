<template>
    <ul class="menu-list">
        <li v-for="(listitem, index) in lists" :key="index">
            <a href="#">{{ listitem.title }} <span><em :class="listitem.icon"></em></span></a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "GeneralList",
        props: {
            lists: Array,
        },
    }
</script>