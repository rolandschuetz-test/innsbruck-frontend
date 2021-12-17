<template>
    <ul :class="`link-list ${categoryFilter}`">
        <li v-for="(listitem, index) in fillterLinkLists" :data-filter="listitem.category" :key="index" >
            <a :href="listitem.link" class="underline"><span class="line">{{ listitem.title }}<em class="category">{{ listitem.categoryText }}</em></span></a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "filter-link-list",
        props: {
            fillterLinkLists: Array,
            categoryFilter: {
                type: String,
                default: ''
            }
        },
    }
</script>