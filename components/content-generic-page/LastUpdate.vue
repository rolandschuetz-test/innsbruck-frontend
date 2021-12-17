<template>
    <div class="last-update-block">
        <div class="container">
            <div class="last-update-row">
                <p>{{ lastUpdate }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "last-update",
        props: {
            lastUpdate: {
                type: String,
                require: true
            }
        }
    }
</script>