
// This template is for Icons use

<template>
    <em :class="'icon-'+icon">Icon {{ icon }}</em>
</template>

<script>
    export default {
        props: {
            icon: {
                type: String,
                required: true
            }
        }
    }
</script>