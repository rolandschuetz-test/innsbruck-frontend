<template>
    <div class="columns is-multiline">
        <div class="column is-one-third-desktop is-half-tablet" v-for="(item, index) in quicklinkLists" :key="index">
            <div class="quicklink-box">
                <a :href="item.link">
                    <div class="quicklink-icon">
                        <em :class="'icon-'+item.icon">Icon {{ item.icon }}</em>
                    </div>
                    <div class="quicklink-info">
                        <h2><span class="line">{{ item.title }}</span></h2>
                        <p>{{ item.disc }}</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Quicklinks',
    props: {
        quicklinkLists: Array
    }
}
</script>

