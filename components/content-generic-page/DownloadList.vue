<template>
    <ul :class="`download-list ${categoryFilter}`">
        <li v-for="(listitem, index) in downloadLists" :data-filter="listitem.category" :key="index">
            <a :href="listitem.link" :class="listitem.parentclass"><span :class="listitem.class">{{ listitem.title }}</span> <span class="file-icon"><em :class="listitem.icon"></em></span></a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "download-list",
        props: {
            downloadLists: Array,
            categoryFilter: {
                type: String,
                default: ''
            }
        },
    }
</script>