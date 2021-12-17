<template>
    <ul class="link-list">
        <li v-for="(listitem, index) in linkLists" :key="index">
            <a :href="listitem.link" class="underline"><span class="line">{{ listitem.title }}</span></a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "link-list",
        props: {
            linkLists: Array
        },
    }
</script>