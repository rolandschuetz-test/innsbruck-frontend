<template>
    <div class="search-result-found">
        <p> {{ title }} </p>
        <slot />
    </div>
</template>

<script>
    export default {
        name: "ResultFound",
        props: {
            title: {
                type: String,
                required: true
            }
        }
    }
</script>