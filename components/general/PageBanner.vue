<template>
    <div class="page-banner default-banner">
        <div class="container">
            <div class="page-banner-row">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PageBanner',
    }
</script>