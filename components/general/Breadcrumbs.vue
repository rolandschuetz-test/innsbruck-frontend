<template>
    <ul class="breadcrumbs">
        <li v-for="(crumb, index) in crumbs" :key="index">
            <nuxt-link v-if="index+1 < crumbs.length" :to="crumb.url" class="underline"><span class="line">{{ crumb.name }}</span></nuxt-link>
            <span v-else>{{ crumb.name }}</span>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'breadcrumbs',
        props: {
            crumbs: {
                type: Array,
                required: true
            }
        }
    }
</script>