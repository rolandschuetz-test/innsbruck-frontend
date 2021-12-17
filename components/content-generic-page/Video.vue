<template>
    <div class="video-block">
        <div class="video-box">
            
            <slot />
            
        </div>
    </div>
</template>

<script>
    export default {
        name: "default-video",
        data() {
            return {
                rounded: false
            }
        }
    }
</script>